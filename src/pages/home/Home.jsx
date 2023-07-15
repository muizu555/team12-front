import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";


export default function Home() {
  const [fetchResult, setFetchResult] = useState()

  useEffect(() => {
    const fetcher = async () => {
      setFetchResult(await Fetch())
    }
    fetcher()
  }, [])

  if (fetchResult === undefined) {
    return (
      <div className="content">
        Now loading
      </div>
    )
  }

  const { realuser, user: users } = fetchResult.data

  return (
    <>
      <header id="header">
        <a href="/">Youtube WatchTime Tracker</a>
      </header>
      <div className="body">
        <div className="ranking">
          <div id="title">
            <h1>Ranking</h1>
          </div>
          <div className="content">
            <div className="order"><h1>rank</h1></div>
            <div className="userName"><h1>name</h1></div>
            <div className="watchTime"><h1>time</h1></div>
          </div>
          <div id="contents">
            {users.map((user, i) => <Content key={i} rank={user.rank} name={user.username} time={user.amount} />)}
          </div>
        </div>
        {realuser ? (
          <div className="profile">
            <div id="title">
              <h1>MyProfile</h1>
            </div>
            <div className="profileContent">
              <div id="myName"><h1><span className="label">Name: </span>{realuser.username}</h1></div>
              <div id="myWatchTime"><h1><span className="label">Time: </span>{realuser.amount}</h1></div>
              <div id="myRanking"><h1><span className="label">Rank: </span>{realuser.rank}</h1></div>
            </div>
          </div>
        ) : (
          <div className="profileContent"><a href="/register">not logged in</a></div>
        )}
      </div>
    </>
  );
}

function Content({ rank, name, time }) {
  return (
    <div className="content">
      <div className="order"><h1>{rank}</h1></div>
      <div className="userName"><h1>{name}</h1></div>
      <div className="watchTime"><h1>{time}</h1></div>
    </div>
  )
}

async function Fetch() {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/users/", {
      withCredentials: true,
    });
    console.log(res.data)
    return res
  } catch (err) {
    console.log("err");
  }
}
