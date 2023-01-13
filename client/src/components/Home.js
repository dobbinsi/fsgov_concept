import React, { useState } from "react";
import "../App.css";
import fscube from "../logos/fscubewhite.png";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function Home() {
  const [flipVertically, setFlipVertically] = useState(false);
  const flipHandler = () => {
    setFlipVertically(!flipVertically);
  };

  return (
    <div className="main">
      <div className="tile">
        <Tilt
          className="parallax-effect-img"
          tiltReverse={true}
          trackOnWindow={true}
          gyroscope={true}
          perspective={500}
          scale={1.05}
          flipVertically={flipVertically}
        >
          <div className="glass" onClick={flipHandler}>
            <a
              href="https://flipsidecrypto.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={fscube} alt="flipside" className="fslogo" />
            </a>
          </div>
        </Tilt>
      </div>
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Flipside Governance").start();
          }}
          options={{
            wrapperClassName: "type",
            cursorClassName: "type-cursor",
          }}
        />
      </div>
      <div className="links">
        <Link to={"/about"} className="homelinks">
          Who We Are
        </Link>
        <Link to={"/delegate"} className="homelinks">
          Delegate Platform
        </Link>
        <Link to={"/content"} className="homelinks">
          Research & Content
        </Link>
      </div>
    </div>
  );
}

export default Home;
