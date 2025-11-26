import React from "react";
import "./Buttons.css";

import whatsappIcon from "../imgs/whatsapp.svg";
import phoneIcon from "../imgs/phone.svg";

export default function Buttons() {
  return (
    <div className="below-hero-buttons">

      <a
        href="https://wa.me/7559436129"
        className="btn whatsapp-btn"
        target="_blank"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
        Chat on WhatsApp
      </a>

      <a href="#contact" className="btn contact-btn">
        <img src={phoneIcon} alt="Contact" className="btn-icon" />
        Contact Us
      </a>

    </div>
  );
}
