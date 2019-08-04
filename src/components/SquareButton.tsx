import React from "react";

import "./SquareButton.css";
import border from "../assets/border-default.png";
import highlightedBorder from "../assets/border-highlight.png";
import talentOutlines from "../assets/talent-outlines.gif";

interface Props {
  icon: string;
  disabled?: boolean;
  outline?: "grey" | "green" | "gold";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onRightClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const SquareButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      icon,
      onRightClick = () => {},
      className = "",
      disabled,
      outline,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`SquareButton ${className}`}
        disabled={disabled}
        onContextMenu={e => {
          e.preventDefault();
          onRightClick();
        }}
        {...rest}
      >
        <div
          className={`SquareButton-content ${
            disabled ? "SquareButton-content--disabled" : ""
          }`}
          style={{
            backgroundImage: `url(${border}), url(${icon})`,
          }}
        />
        <div
          className="SquareButton-aura"
          style={{ backgroundImage: `url(${highlightedBorder})` }}
        />
        {outline && (
          <div
            className={`SquareButton-outline SquareButton-outline--${outline}`}
            style={{ backgroundImage: `url(${talentOutlines})` }}
          />
        )}
      </button>
    );
  },
);
