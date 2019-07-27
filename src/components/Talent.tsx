import React from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { useTreeContext } from "../TreeContext";
import {
  useTalentContext,
  getTalentData,
  getTalentRank,
  isTalentAvailable,
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

  const { icon, maxRank } = getTalentData(state, tree, name);
  const rank = getTalentRank(state, tree, name);
  const available = isTalentAvailable(state, tree, name);

  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >(rank);

  const talentState = (() => {
    if (rank === maxRank) {
      return "maxed";
    }
    if (available) {
      return "enabled";
    }
    return "disabled";
  })();

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        onClick={
          talentState === "enabled"
            ? () => dispatch({ type: "POINT_SPENT", tree, talent: name })
            : undefined
        }
        icon={icon}
        state={talentState}
        {...anchorProps}
      />
      {talentState !== "disabled" && (
        <div className="Talent-pointCount">{rank}</div>
      )}
      {tooltipVisible && (
        <TalentTooltip name={name} tree={tree} {...tooltipProps} />
      )}
    </div>
  );
};
