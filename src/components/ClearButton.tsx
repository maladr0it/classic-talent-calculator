import React from "react";

import "./ClearButton.css";
import crossImage from "../assets/cross.gif";

export const ClearButton: React.FC = ({ children }) => {
  return (
    <button className="ClearButton">
      {children && <span className="ClearButton-label">{children}</span>}
      <div
        className="ClearButton-icon"
        style={{ backgroundImage: `url(${crossImage})` }}
      />
    </button>
  );
};
