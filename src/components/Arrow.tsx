import React from "react";

import "./Arrow.css";
import arrowRight from "../assets/arrows/right.png";
import arrowRightGold from "../assets/arrows/right--gold.png";
import arrowDown from "../assets/arrows/down.png";
import arrowDownGold from "../assets/arrows/down--gold.png";
import arrowRightDown from "../assets/arrows/right-down.png";
import arrowRightDownGold from "../assets/arrows/right-down--gold.png";

import { useTalentContext, Position } from "../TalentContext";
import { isTalentAvailable } from "../TalentContext";
import { useTreeContext } from "../TreeContext";

const imageMap = {
  right: arrowRight,
  "right--gold": arrowRightGold,
  down: arrowDown,
  "down--gold": arrowDownGold,
  "right-down": arrowRightDown,
  "right-down--gold": arrowRightDownGold,
  "right-down-down": arrowDown,
  "right-down-down--gold": arrowDownGold
};

interface Props {
  direction: "right" | "down" | "right-down" | "right-down-down";
  from: Position;
  to: Position;
  target: string;
}

export const Arrow: React.FC<Props> = ({ direction, from, to, target }) => {
  const tree = useTreeContext();
  const { state } = useTalentContext();
  const active = isTalentAvailable(state, tree, target);

  const arrowType = `${direction}${
    active ? "--gold" : ""
  }` as keyof typeof imageMap;

  return (
    <div
      className={`Arrow-${direction}-container`}
      style={{ gridArea: `${from} / ${from} / ${to} / ${to}` }}
    >
      <div
        className={`Arrow-${direction}`}
        style={{
          backgroundImage: `url(${imageMap[arrowType]})`
        }}
      />
    </div>
  );
};
