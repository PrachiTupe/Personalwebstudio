import React from "react";
import "./ActiveShimmer.css";
import bluetick from "../icons/bluetick.svg"; // adjust path as needed

const ActiveShimmer = () => {
  return (
    <div className="active-shimmer-wrapper">
      <div className="active-shimmer">
        <img src={bluetick} alt="Active" className="active-icon" />
        <span className="active-text">8 Active Projects are in Progress</span>
      </div>
    </div>
  );
};

export default ActiveShimmer;
