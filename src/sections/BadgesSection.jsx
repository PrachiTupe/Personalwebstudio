import React from "react";
import "./BadgesSection.css";

import badge1 from "../icons/badges/badge1.svg";
import badge2 from "../icons/badges/badge1.svg";

export default function BadgesSection() {
  return (
    <section className="badges-section">
      <div className="badges-wrapper">
        <div className="badge-card">
          <img src={badge1} alt="Award Badge" className="badge-icon" />
          <p className="badge-title">Best Modern Web Experience – 2024</p>
        </div>

        <div className="badge-card">
          <img src={badge2} alt="Award Badge" className="badge-icon" />
          <p className="badge-title">Top Rising Web Development Agency – 2025</p>
        </div>
      </div>
    </section>
  );
}
