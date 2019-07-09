import React from "react";

import "./Arrow.css";
import arrowRight from "../assets/arrow-right.png";
import arrowDown from "../assets/arrow-down.png";
import arrowRightDown from "../assets/arrow-right-down.png";
import { Position } from "./TalentTree";

type Direction = "right" | "down" | "right-down" | 'right-down-down';

const imageMap: Record<Direction, string> = {
  right: arrowRight,
  down: arrowDown,
  "right-down": arrowRightDown,
  'right-down-down': arrowDown,
};

interface Props {
  direction: Direction;
  from: Position;
  to: Position;
}

export const Arrow: React.FC<Props> = ({ direction, from, to }) => {
  return (
    <div
      className={`Arrow-${direction}-container`}
      style={{ gridArea: `${from} / ${from} / ${to} / ${to}` }}
    >
      <div
        className={`Arrow-${direction}`}
        style={{
          backgroundImage: `url(${imageMap[direction]})`
        }}
      />
    </div>
  );
};
