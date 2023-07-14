import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css";

export default function Home() {
    return (
      <>
        <Topbar />

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
            <div id="myName"><h1>piyo</h1></div>
            <div id="myWatchTime"><h1>01:23</h1></div>
            <div id="myRanking"><h1>1位</h1></div>
          </div>
        </div>
      </>
    );













}

function Content() {
  return (
      <>
          <div className="content">
              <div className="order"><h1>1</h1></div>
              <div className="userName"><h1>name</h1></div>
              <div className="watchTime"><h1>01:23</h1></div>
          </div>
      </>
  )
}