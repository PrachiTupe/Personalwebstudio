import React from "react";
import heroImage from "../imgs/hero.jpg"; // Replace with your image path
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-gradient"></div>

        {/* ---- TEXT CONTENT ---- */}
        <div className="hero-content">
          <h1 className="hero-title">
            Get a <span className="highlight">FREE</span> One to One Guidance
          </h1>
        </div>
      </div>
    </section>
  );
}
