import React from "react";

import "./Arrow.css";
import arrowRight from "../assets/arrows/right.png";
import arrowRightGold from "../assets/arrows/right--gold.png";
import arrowDown from "../assets/arrows/down.png";
import arrowDownGold from "../assets/arrows/down--gold.png";
import arrowRightDown from "../assets/arrows/right-down.png";
import arrowRightDownGold from "../assets/arrows/right-down--gold.png";

import { Position, ArrowDir } from "../TalentContext";

const imageMap = {
  right: arrowRight,
  "right--gold": arrowRightGold,
  down: arrowDown,
  "down--gold": arrowDownGold,
  "right-down": arrowRightDown,
  "right-down--gold": arrowRightDownGold,
  "right-down-down": arrowDown,
  "right-down-down--gold": arrowDownGold,
};

interface Props {
  dir: ArrowDir;
  from: Position;
  to: Position;
  active: boolean;
}

export const Arrow: React.FC<Props> = ({ dir, from, to, active }) => {
  const arrowType = `${dir}${active ? "--gold" : ""}` as keyof typeof imageMap;

  return (
    <div
      className={`Arrow-container Arrow-container--${dir}`}
      style={{ gridArea: `${from} / ${from} / ${to} / ${to}` }}
    >
      <div
        className={`Arrow Arrow--${dir}`}
        style={{
          backgroundImage: `url(${imageMap[arrowType]})`,
        }}
      />
    </div>
  );
};
