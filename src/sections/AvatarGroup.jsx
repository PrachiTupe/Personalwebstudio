import React from "react";
import "./AvatarGroup.css";

// Import avatars
import a1 from "../imgs/avatars/a1.png";
import a2 from "../imgs/avatars/a2.png";
import a3 from "../imgs/avatars/a3.png";

// Import star icon
import star from "../icons/star.svg";

const customers = [a1, a2, a3];

export default function AvatarGroup() {
  return (
    <div className="avatar-group-section">
      <div className="avatar-group-container">
        <div className="avatar-group">
          {customers.map((src, index) => (
            <div key={index} className="avatar">
              <img src={src} alt={`Customer ${index + 1}`} />
            </div>
          ))}

          {/* Placeholder */}
          <div className="avatar placeholder">
            <span>+83</span>
          </div>
        </div>

        {/* Rating */}
        <div className="avatar-group-rating">
          <img src={star} alt="star" className="star-icon" />
          <span>4.8 Star Rated</span>
        </div>
      </div>

      <p className="avatar-group-subtitle">
        Companies trust us for our Quality & Assurities
      </p>
    </div>
  );
}
