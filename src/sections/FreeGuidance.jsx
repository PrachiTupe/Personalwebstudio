import React, { useEffect, useState } from "react";
import "./FreeGuidance.css";

export default function LimitedSpots() {
  const totalSpots = 400;
  const [enrolled, setEnrolled] = useState(43);
  const [viewers, setViewers] = useState(12);
  const spotsLeft = totalSpots - enrolled;

  // Smoothly increase enrolled for demo
  useEffect(() => {
    const interval = setInterval(() => {
      if (enrolled < totalSpots) {
        setEnrolled(prev => prev + (Math.floor(Math.random() * 2) + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [enrolled]);

  // Live viewers fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      const randomViewers = Math.floor(Math.random() * 14) + 4;
      setViewers(randomViewers);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spots-wrapper">
      <div className="spots-card">
        <h3 className="spots-title">⚡ Limited Spots</h3>

        {/* Progress bar */}
        <div className="spots-progress-container">
          <div className="spots-progress">
            <div
              className="spots-fill"
              style={{ width: `${(enrolled / totalSpots) * 100}%` }}
            ></div>
          </div>
          <div className="progress-number">{enrolled}/{totalSpots}</div>
        </div>

        {/* Stats row with number + label on right side */}
        <div className="spots-stats">
          <div className="stat-item">
            <span className="stat-number">{enrolled}</span>
            <span className="stat-label">People<br/>Registered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{spotsLeft > 0 ? spotsLeft : 0}</span>
            <span className="stat-label">Spots<br/>Left</span>
          </div>
        </div>

        {/* Live viewers */}
        <div className="live-viewers">
          <span className="pulse-dot"></span>
          {viewers} people are viewing this page right now
        </div>
      </div>
    </div>
  );
}
