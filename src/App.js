import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./sections/Navigation";
import InfiniteSentence from "./sections/InfiniteSentence";
import Home from "./pages/Home";
import FakeNotification from "./sections/FakeNotification";
import DMRegistrationForm from "./pages/DMRegistrationForm";

export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#ffffff" }}>
        
        <Routes>

          {/* ---------- HOME PAGE WITH ALL SECTIONS ---------- */}
          <Route
            path="/"
            element={
              <>
                <InfiniteSentence />
                <Navigation />
                <FakeNotification />
                <Home />
              </>
            }
          />

          {/* ---------- REGISTRATION PAGE WITHOUT EXTRAS ---------- */}
          <Route path="/apply" element={<DMRegistrationForm />} />

        </Routes>

      </div>
    </Router>
  );
}
