import React, { useState } from "react";

import "./SquareButton.css";
import border from "../assets/border-default.png";
import selectedBorder from "../assets/border-gold-selected.png";
import highlightedBorder from "../assets/border-highlight.png";

interface Props {
  icon: string;
  selected: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const SquareButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, selected, className = "", ...rest }, ref) => {
    return (
      <button ref={ref} className={`SquareButton ${className}`} {...rest}>
        <div
          className="SquareButton-icon"
          style={{ backgroundImage: `url(${icon})` }}
        />
        <div
          className="SquareButton-aura"
          style={{ backgroundImage: `url(${highlightedBorder})` }}
        />
        <div
          className="SquareButton-border"
          style={{
            backgroundImage: `url(${selected ? selectedBorder : border})`
          }}
        />
      </button>
    );
  }
);
