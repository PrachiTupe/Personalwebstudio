import React from "react";
import "./ToolsScrollersSection.css";

import ToolsScroll from "./ToolsScroll";
import ToolsScrollReverse from "./ToolsScrollReverse";

export default function ToolsScrollersSection() {
  return (
    <section className="tools-scrollers-section">
      <h2 className="tools-scrollers-title">Tools We Use</h2>
      <div className="tools-scrollers-wrapper">
        <ToolsScroll />
        <ToolsScrollReverse />
      </div>
    </section>
  );
}
