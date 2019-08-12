import React from "react";

import "./Talent.css";
import talentBubble from "../assets/talent-bubble.png";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { useTreeContext } from "../TreeContext";
import { useTalentContext } from "../TalentContext";
import { TalentTooltip } from "./TalentTooltip";
import { SquareButton } from "./SquareButton";
import { Arrow } from "./Arrow";
import {
  getTalentRank,
  isTalentMaxed,
  isTalentUnlocked,
  getPointsLeft,
  getTalentData,
} from "../TalentContext/selectors";

interface Props {
  name: string;
}

export const Talent: React.FC<Props> = ({ name }) => {
  const tree = useTreeContext();
  const { state, data, spendPoint, unspendPoint } = useTalentContext();

  const { pos, icon, arrows } = getTalentData(data, tree, name);
  const pointsLeft = getPointsLeft(state);
  const rank = getTalentRank(state, tree, name);
  const maxed = isTalentMaxed(state, data, tree, name);
  const unlocked = isTalentUnlocked(state, data, tree, name);

  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >(rank);

  // TODO: too many edge cases here, hard to digest
  // move to a selector?
  const talentState = (() => {
    if (pointsLeft < 1 && rank === 0) {
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

  const outlineColor = (() => {
    if (talentState === "unlocked") {
      return "green";
    }
    if (talentState === "maxed") {
      return "gold";
    }
    return "grey";
  })();

  return (
    <>
      {arrows &&
        arrows.map((arrow, i) => (
          <Arrow key={i} active={unlocked} {...arrow} />
        ))}
      <div className="Talent-container" style={{ gridArea: pos }}>
        <SquareButton
          onClick={() => spendPoint(tree, name)}
          onRightClick={() => unspendPoint(tree, name)}
          icon={icon}
          disabled={talentState === "locked"}
          outline={outlineColor}
          {...anchorProps}
        />
        {talentState !== "locked" && (
          <div
            className={`Talent-pointCount Talent-pointCount--${outlineColor}`}
            style={{ backgroundImage: `url(${talentBubble})` }}
          >
            {rank}
          </div>
        )}
        {tooltipVisible && (
          <TalentTooltip name={name} tree={tree} {...tooltipProps} />
        )}
      </div>
    </>
  );
};
