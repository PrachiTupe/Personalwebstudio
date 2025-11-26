import React from "react";
import "./InfiniteSentence.css";

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
  { icon: t1, text: "Trusted by 80+ Clients" },
  { icon: t2, text: "4.8★ Rated Team" },
  { icon: t3, text: "63+ Websites Delivered" },
  { icon: t4, text: "100% Client Satisfaction" },
  { icon: t5, text: "Fast & Reliable Service" },
];

const SPEED = 26000; // adjust if you want faster/slower

const RowSlider = ({ children }) => {
  return (
    <div
      className="sentence-slider"
      style={{
        "--duration": `${SPEED}ms`,
        "--direction": "normal",
      }}
    >
      <div className="sentence-inner">{children}{children}</div>
    </div>
  );
};

const SentenceItem = ({ icon, text }) => (
  <div className="sentence-item">
    <span>{text}</span>
  </div>
);

export default function InfiniteSentence() {
  return (
    <div className="sentence-section">
      <div className="sentence-row">
        <RowSlider>
          {ITEMS.map((item, index) => (
            <SentenceItem 
              key={index}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </RowSlider>

        <div className="sentence-fade" />
      </div>
    </div>
  );
}
