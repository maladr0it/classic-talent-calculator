import React from "react";

import "./ClearButton.css";
import crossImage from "../assets/cross.gif";

interface Props {
  onClick: () => void;
}

export const ClearButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button className="ClearButton" {...rest}>
      {children && <span className="ClearButton-label">{children}</span>}
      <div
        className="ClearButton-icon"
        style={{ backgroundImage: `url(${crossImage})` }}
      />
    </button>
  );
};
