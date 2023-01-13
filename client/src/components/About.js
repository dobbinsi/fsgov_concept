import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar3 from "./Navbar3";
import aave from "../logos/aavegray.png";
import axl from "../logos/axelargray2.png";
import cosmos from "../logos/cosmosgray.png";
import hop from "../logos/hopgray.png";
import juno from "../logos/junogray.png";
import mkr from "../logos/mkrgray.png";
import mnde from "../logos/mndegray.png";
import op from "../logos/opgray.png";
import osmo from "../logos/osmogray.png";
import sushi from "../logos/sushigrey.png";

import avi from "../logos/avi.jpeg";
import fig from "../logos/fighs.jpeg";
import jess from "../logos/jessmonke.png";
import raph from "../logos/raphbaph.jpeg";
import dobby from "../logos/dobby.png";

import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

function About() {
  return (
    <>
      <Navbar3 />
      <div className="wrapper">
        <div className="double">
          <div className="small-chart-area1">
            <h2>Who We Are</h2>
            <p>
              We are a full time governance team dedicated to the complete Web3
              ecosystem. We currently run delegations in multiple Ethereum-based
              DAOs. We're committed to using our experience to improve DAOs, one
              proposal at a time. Through our participation in multiple DAOs
              we've developed key understandings around the needs and flow of
              information in the governance process, and key tooling to be
              successful. Our dedication to support, contribute, and drive
              participation in our partner communities allows us to improve the
              efficiencies of DAOs.
            </p>
          </div>
          <div className="small-chart-area2">
            <h2>Our Values</h2>
            <h3>Rational</h3>
            <h3>Human</h3>
            <h3>Integrity</h3>
            <h3>Data-Driven</h3>
            <h3>Curiosity</h3>
          </div>
        </div>
        <div className="small-chart-area3">
          <h2>Our Partners</h2>
          <div className="pnershouse">
            <div className="pners">
              <div className="grid">
                <img src={aave} className="partners" />
                <img src={axl} className="partners" />
                <img src={cosmos} className="partners" />
                <img src={hop} className="partners" />
                <img src={juno} className="partners" />
                <img src={mkr} className="partners" />
                <img src={mnde} className="partners" />
                <img src={op} className="partners" />
                <img src={osmo} className="partners" />
                <img src={sushi} className="partners" />
              </div>
            </div>
          </div>
        </div>
        <div className="small-chart-area3">
          <h2>Our Team</h2>
          <div className="team">
            <div className="profile">
              <div className="pfpbox">
                <img src={avi} className="pfp" />
              </div>
              <h3>Avi Meyers</h3>
              <TwitterIcon />
              <TelegramIcon />
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={fig} className="pfp" />
              </div>
              <h3>Francis (Fig) Gowen</h3>
              <TwitterIcon />
              <TelegramIcon />
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={jess} className="pfp" />
              </div>
              <h3>Jessica Huhnke</h3>
              <TwitterIcon />
              <TelegramIcon />
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={raph} className="pfp" />
              </div>
              <h3>Raphael Spannocchi</h3>
              <TwitterIcon />
              <TelegramIcon />
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={dobby} className="pfp" />
              </div>
              <h3>Ian Dobbins</h3>
              <TwitterIcon />
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
