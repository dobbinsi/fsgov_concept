import React, { useState } from "react";
import "../App.css";
import Navbar4 from "./Navbar4";

import avi from "../logos/avi.jpeg";
import fig from "../logos/fighs.jpeg";
import jess from "../logos/jessmonke.png";
import raph from "../logos/raphbaph.jpeg";
import dobby from "../logos/dobby.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

import mkrtoken from "../logos/mkrtoken.png";
import hoptoken from "../logos/hoptoken.png";
import aavetoken from "../logos/aavetoken.png";
import optoken from "../logos/optoken.png";

function Delegate() {
  return (
    <>
      <Navbar4 />
      <div className="wrapper">
        <div className="small-chart-area3">
          <h2>Delegate to Flipside</h2>
          <div className="team">
            <div className="profile">
              <div className="pfpbox">
                <img src={mkrtoken} className="pfp" />
              </div>
              <h2 className="token">Delegate MKR</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={aavetoken} className="pfp" />
              </div>
              <h2 className="token">Delegate AAVE</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={optoken} className="pfp" />
              </div>
              <h2 className="token">Delegate OP</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={hoptoken} className="pfp" />
              </div>
              <h2 className="token">Delegate HOP</h2>
            </div>
          </div>
        </div>
        <div className="small-chart-area3">
          <h2>Why Flipside?</h2>
          <p>
            We are a full time governance team dedicated to the complete Web3
            ecosystem. We currently run delegations in multiple Ethereum-based
            DAOs. We're committed to using our experience to improve DAOs, one
            proposal at a time. Through our participation in multiple DAOs we've
            developed key understandings around the needs and flow of
            information in the governance process, and key tooling to be
            successful. Our dedication to support, contribute, and drive
            participation in our partner communities allows us to improve the
            efficiencies of DAOs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Delegate;
