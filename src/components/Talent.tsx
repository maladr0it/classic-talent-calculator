import React from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { useTreeContext } from "../TreeContext";
import { useTalentContext } from "../TalentContext";
import { TalentTooltip } from "./TalentTooltip";
import { SquareButton } from "./SquareButton";
import { Arrow } from "./Arrow";

interface Props {
  name: string;
}

export const Talent: React.FC<Props> = ({ name }) => {
  const tree = useTreeContext();
  const {
    state,
    data,
    points,
    unlockedTalents,
    maxedTalents,
    spendPoint,
    unspendPoint,
  } = useTalentContext();

  const { pos, icon, arrows } = data[tree].talents[name];
  const rank = state[tree][name];
  const maxed = maxedTalents[tree][name];
  const unlocked = unlockedTalents[tree][name];

  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >(rank);

  const talentState = (() => {
    if (points < 1 && rank === 0) {
      return "locked";
    }
    if (maxed) {
      return "maxed";
    }
    if (unlocked) {
      return "unlocked";
    }
    return "locked";
  })();

  return (
    <>
      {arrows &&
        arrows.map((arrow, i) => (
          <Arrow key={i} active={unlocked} {...arrow} />
        ))}
      <div className="Talent-container" style={{ gridArea: pos }}>
        <SquareButton
          onClick={
            talentState === "unlocked" && points > 0
              ? () => spendPoint(tree, name)
              : undefined
          }
          onRightClick={() => unspendPoint(tree, name)}
          icon={icon}
          state={talentState}
          {...anchorProps}
        />
        {talentState !== "locked" && (
          <div className="Talent-pointCount">{rank}</div>
        )}
        {tooltipVisible && (
          <TalentTooltip name={name} tree={tree} {...tooltipProps} />
        )}
      </div>
    </>
  );
};
