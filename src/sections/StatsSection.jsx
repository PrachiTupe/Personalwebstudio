import React from "react";
import "./StatsSection.css";
import ActiveShimmer from "../components/ActiveShimmer"; // adjust path if needed

const stats = [
  { number: 68, label: "Websites Deployed" },
  { number: 18, label: "Apps Developed" },
  { number: 13, label: "SaaS Built" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      {/* Active Projects Shimmer Pill */}
      

      {/* Stats Cards */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.number}</h2>
            <div className="stat-label">
              {stat.label.split(" ").map((word, i) => (
                <p key={i}>{word}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ActiveShimmer />
    </section>
  );
}
