import React from "react";

import "./SquareButton.css";
import border from "../assets/border-default.png";
import selectedBorder from "../assets/border-gold-selected.png";
import highlightedBorder from "../assets/border-highlight.png";

interface Props {
  onClick: () => void;
  icon: string;
  selected: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const SquareButton: React.FC<Props> = ({
  onClick,
  icon,
  selected,
  className = "",
  style
}) => {
  return (
    <button
      onClick={onClick}
      className={`SquareButton ${className}`}
      style={style}
    >
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
};
