import React from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import {
  useTalentContext,
  getTalentData,
  getTalentPoints
} from "../TalentContext";
import { Position } from "./TalentTree";
import { TalentTooltip } from "./TalentTooltip";
import { SquareButton } from "./SquareButton";

interface Props {
  position: Position;
  tree: string;
  name: string;
}

export const Talent: React.FC<Props> = ({ tree, name, position }) => {
  const { state, dispatch } = useTalentContext();
  const points = getTalentPoints(state, tree, name);
  const { icon, description, maxPoints } = getTalentData(state, tree, name);

  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >("topRight");

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        onClick={() => dispatch({ type: "POINT_SPENT", tree, talent: name })}
        icon={icon}
        outline="gold"
        {...anchorProps}
      />
      <div className="Talent-pointCount">{points}</div>
      {tooltipVisible && (
        <TalentTooltip
          name={name}
          description={description}
          points={points}
          {...tooltipProps}
        />
      )}
    </div>
  );
};
