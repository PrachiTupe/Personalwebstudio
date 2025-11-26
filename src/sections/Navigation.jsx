import React from "react";
import logo from "../imgs/logo.png";
import ContactButton from "../components/ContactButton"; // Animated Contact Button

import "./Navigation.css"; // Import navbar CSS

export default function Navigation() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Contact Button */}
      <div className="contact-wrapper">
        <ContactButton />
      </div>
    </nav>
  );
}
