import React from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { useTreeContext } from "../TreeContext";
import {
  useTalentContext,
  getTalentData,
  getTalentRank,
  getPointsSpent
} from "../TalentContext";
import { Position } from "./TalentTree";
import { TalentTooltip } from "./TalentTooltip";
import { SquareButton } from "./SquareButton";

interface Props {
  position: Position;
  name: string;
}

export const Talent: React.FC<Props> = ({ name, position }) => {
  const tree = useTreeContext();
  const { state, dispatch } = useTalentContext();
  const pointsSpent = getPointsSpent(state, tree);
  const rank = getTalentRank(state, tree, name);
  const {
    icon,
    disabledIcon,
    description,
    requiredPoints,
    maxRank
  } = getTalentData(state, tree, name);

  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >("topRight");

  const talentState = (() => {
    if (rank === maxRank) {
      return "maxed";
    }
    if (pointsSpent >= requiredPoints && state.points > 0) {
      return "enabled";
    }
    return "disabled";
  })();

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        onClick={() => dispatch({ type: "POINT_SPENT", tree, talent: name })}
        icon={icon}
        disabledIcon={disabledIcon}
        state={talentState}
        {...anchorProps}
      />
      <div className="Talent-pointCount">{rank}</div>
      {tooltipVisible && (
        <TalentTooltip
          name={name}
          rank={rank}
          maxRank={maxRank}
          description={description}
          {...tooltipProps}
        />
      )}
    </div>
  );
};
