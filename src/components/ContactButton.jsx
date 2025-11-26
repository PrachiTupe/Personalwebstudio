import React from "react";
import "./ContactButton.css"; // make sure this path is correct

export default function ContactButton() {
  return (
    <div className="ai-mode-component">
      <button className="ai-mode-button">
        <div className="blur-layer">
          <div className="rotating-gradient"></div>
        </div>

        <div className="gradient-layer">
          <div className="rotating-gradient"></div>
        </div>

        <div className="inner-bg"></div>

        <div className="button-content">

          <span className="label">Contact Us</span>
        </div>
      </button>
    </div>
  );
}
