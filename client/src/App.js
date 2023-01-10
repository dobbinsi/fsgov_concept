import React, { useState } from "react";
import "./App.css";
import fscube from "./logos/fscubewhite.png";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

function App() {
  const [flipVertically, setFlipVertically] = useState(false);
  const flipHandler = () => {
    setFlipVertically(!flipVertically);
  };

  return (
    <div>
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
        <a>Who We Are</a>
        <a>Delegate Platform</a>
        <a>Research & Content</a>
      </div>
    </div>
  );
}

export default App;
