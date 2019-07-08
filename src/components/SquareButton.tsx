import React from "react";

import "./SquareButton.css";
import border from "../assets/border-default.png";
import selectedBorder from "../assets/border-gold-selected.png";
import highlightedBorder from "../assets/border-highlight.png";

interface Props {
  imageURL: string;
  selected: boolean;
}

export const SquareButton: React.FC<Props> = ({ imageURL, selected }) => {
  return (
    <button className="SquareButton">
      <div
        className="SquareButton-icon"
        style={{ backgroundImage: `url(${imageURL})` }}
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
