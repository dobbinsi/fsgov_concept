import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Delegate from "./components/Delegate";
import Content from "./components/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="delegate" element={<Delegate />}></Route>
        <Route path="content" element={<Content />}></Route>
        {/* <Route path="*" element={NoMatch}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
