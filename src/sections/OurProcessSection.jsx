import React, { useState, useEffect } from "react";
import "./OurProcessSection.css";

import f1 from "../icons/f1.svg";
import f2 from "../icons/f2.svg";
import f3 from "../icons/f3.svg";
import f4 from "../icons/f4.svg";
import f5 from "../icons/f5.svg";


const OurProcessSection = () => {
  const processData = [
    {
      icon: f1,
      title: "Exact Website Type Recommended",
      description: "We’ll tell you whether you need a landing page, multi-page site, e-commerce store, or portfolio — based on your goals.",
    },
    {
      icon: f2,
      title: "Clear Budget Breakdown",
      description: "We explain the costs involved and suggest the best budget plan.",
    },
    {
      icon: f3,
      title: "Common mistakes businesses make",
      description: "Learn the biggest website mistakes most businesses make and how you can avoid them from day one.",
    }, 
    {
      icon: f4,
      title: "Step-by-step plan to get started",
      description: "A simple, actionable roadmap covering domain, design, development, content, and launch.",
    },  

    {
      icon: f5,
      title: "Custom strategy for your business",
      description: "Personalized recommendations tailored to your industry, audience, and long-term growth plan.",

    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [processData.length]);

  return (
    <section className="our-process">
      <div className="our-process-container">
        <h2 className="our-process-heading">
          What You Will Get in the{" "}
          <span className="highlight">Free 25-Minutes</span> Guidance Session
        </h2>
        <p className="our-process-subtext">
          Join our session to get clarity on your website requirements, budget, and strategy.
        </p>

        <div className="our-process-grid">
          {processData.map((step, index) => (
            <div
              key={index}
              className={`process-step ${
                index === activeIndex ? "process-step-active" : ""
              }`}
            >
              <div className="process-step-icon-box">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="process-step-icon"
                />
              </div>
              <div className="process-step-text">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
