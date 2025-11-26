import React from "react";
import "./Footer.css";
import logo from "../imgs/logo.png";
import instagramIcon from "../imgs/instagram.svg";
import linkedinIcon from "../imgs/linkdin.svg";
import whatsappIcon from "../imgs/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Social Connections</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Legal Links Horizontal */}
        <div className="footer-legal-horizontal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
}
