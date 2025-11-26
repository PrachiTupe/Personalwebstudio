import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./sections/Navigation";
import InfiniteSentence from "./sections/InfiniteSentence";
import Home from "./pages/Home";
import FakeNotification from "./sections/FakeNotification";

export default function App() {
  return (
    <Router>
      {/* Main wrapper with black background */}
      <div style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#ffffff" }}>
        <InfiniteSentence />
        <Navigation />
        <FakeNotification />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}
