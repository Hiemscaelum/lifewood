import React from "react";
import "./LifewoodLogo.css";

export default function LifewoodLogo() {
  return (
    <div className="lifewood-container">
      
      {/* Diamond Icon */}
      <svg
        className="lifewood-icon"
        width="40"
        height="60"
        viewBox="0 0 40 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="20,0 40,15 40,45 20,60 0,45 0,15"
          fill="#FFB347"
        />
      </svg>

      {/* Text */}
      <span className="lifewood-text">
        lifewood
      </span>

    </div>
  );
}

