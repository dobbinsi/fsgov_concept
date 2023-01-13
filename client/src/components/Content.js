import React, { useState } from "react";
import "../App.css";
import Navbar5 from "./Navbar5";
import Ticker from "react-ticker";

import mkrtoken from "../logos/mkrtoken.png";
import hoptoken from "../logos/hoptoken.png";
import aavetoken from "../logos/aavetoken.png";
import optoken from "../logos/optoken.png";

import opdash from "../logos/opdash.png";
import ssdash from "../logos/ssdash.png";
import mndedash from "../logos/mndedash.png";

import lessons from "../logos/lessons.png";
import gibaave from "../logos/gibaave.png";
import pay from "../logos/pay.png";

function Content() {
  return (
    <>
      <Navbar5 />
      <div className="wrapper">
        <div className="small-chart-area3">
          <h2>Dashboards & Tools</h2>
          <div className="team">
            <div className="profile">
              <div className="pfpbox">
                <img src={opdash} className="dash" />
              </div>
              <h2 className="token">Optimism</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={ssdash} className="dash" />
              </div>
              <h2 className="token">Snapshot</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={mndedash} className="dash" />
              </div>
              <h2 className="token">Marinade</h2>
            </div>
          </div>
        </div>
        <div className="small-chart-area3">
          <h2>From our Blog (ticker scroll through articles)</h2>
          <div className="team">
            <div className="profile">
              <div className="pfpbox">
                <img src={lessons} className="dash" />
              </div>
              <h2 className="token">Lessons from a Governance Contributor</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={pay} className="dash" />
              </div>
              <h2 className="token">The Case for Paid Delegates</h2>
            </div>
            <div className="profile">
              <div className="pfpbox">
                <img src={gibaave} className="dash" />
              </div>
              <h2 className="token">How to Delegae AAVE</h2>
            </div>
          </div>
        </div>
        <div className="small-chart-area3">
          <h2>Another Section for Weekly Recap</h2>
        </div>
      </div>
    </>
  );
}

export default Content;
