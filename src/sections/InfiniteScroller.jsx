import React from "react";
import "./InfiniteScroller.css";

import t1 from "../icons/tools/t1.svg";
import t2 from "../icons/tools/t2.svg";
import t3 from "../icons/tools/t3.svg";
import t4 from "../icons/tools/t4.svg";
import t5 from "../icons/tools/t5.svg";
import t6 from "../icons/tools/t6.svg";
import t7 from "../icons/tools/t7.svg";
import t8 from "../icons/tools/t8.svg";
import t9 from "../icons/tools/t9.svg";
import t10 from "../icons/tools/t10.svg";
import t11 from "../icons/tools/t11.svg";
import t12 from "../icons/tools/t12.svg";

const ITEMS = [
  { icon: t1, text: "Figma" },
  { icon: t2, text: "Shopify" },
  { icon: t3, text: "Framer" },
  { icon: t4, text: "Webflow" },
  { icon: t5, text: "Carrd" },
  { icon: t6, text: "Wordpress" },
  { icon: t7, text: "Vercel" },
  { icon: t8, text: "Namecheap" },
  { icon: t9, text: "React" },
  { icon: t10, text: "MongoDB" },
  { icon: t11, text: "Razorpay" },
  { icon: t12, text: "NodeJS" },
];

const BASE_SPEED = 28000;
const ROWS = 4;
const ITEMS_PER_ROW = 6;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">{children}{children}</div>
    </div>
  );
};

const Tag = ({ icon, text }) => (
  <div className="tag">
    <img src={icon} alt="tech-icon" className="tag-icon" />
    <span>{text}</span>
  </div>
);

export default function InfiniteScroller() {
  return (
    <div className="app">
      <h2 className="scroll-title">Tools & Technologies</h2>

      <div className="tag-list">
        {[...Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(BASE_SPEED - 6000, BASE_SPEED + 6000)}
            reverse={i % 2 === 0}
          >
            {shuffle(ITEMS)
              .slice(0, ITEMS_PER_ROW)
              .map((item, index) => (
                <Tag 
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
          </InfiniteLoopSlider>
        ))}

        <div className="fade" />
      </div>
    </div>
  );
}
