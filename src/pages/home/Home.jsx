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

  /*くそこーど
  const [myname, setMyName] = useState([]);

  useEffect(() => {
    async function fetchName() {
      const res = await axios.get("http://localhost:8000/api/v1/users/");
      setMyName(res.data.username);
      return res;
    }

    fetchName();
  },[]);


  const [mytime, setMyTime] = useState([]);

  useEffect(() => {
    async function fetchTime() {
      const res = await axios.get("http://localhost:8000/api/v1/users/");
      setMyTime(res.data.amount);
      return res;
    }

    fetchTime();
  },[]);


  const [myrank, setMyRank] = useState([]);

  useEffect(() => {
    async function fetchRank() {
      const res = await axios.get("http://localhost:8000/api/v1/users/");
      setMyRank(res.data.rank);
      return res;
    }

    fetchRank();
  },[]);
  */

  return (
    <>
      <header id="header">
        <a href="/">Youtube WatchTime Tracker</a>
      </header>
      <div className="body">
        <div className="ranking">
          <div id="title">
            <h1>ranking</h1>
          </div>
          <div id="contents">
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
          </div>
        </div>
        <div className="profile">
          <div id="myName"><h1>{fetchResult.data.username}</h1></div>
          <div id="myWatchTime"><h1>{fetchResult.data.amount}</h1></div>
          <div id="myRanking"><h1>{fetchResult.data.rank}</h1></div>
        </div>
      </div>
    </>
  );













}

function Content() {
  return (
      <>
          <div className="content">
              <div className="order"><h1>rank</h1></div>
              <div className="userName"><h1>name</h1></div>
              <div className="watchTime"><h1>01:23</h1></div>
          </div>
      </>
  )
}

async function Fetch() {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/users/");
    return res
  } catch(err) {
    console.log("err");
  }
}




