import React, { useState } from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { Position } from "./TalentTree";
import { TalentTooltip } from "./TalentTooltip";
import { SquareButton } from "./SquareButton";

interface Props {
  position: Position;
  data: {
    icon: string;
    name: string;
    description: (points: number) => string;
    maxPoints: number;
  };
}

export const Talent: React.FC<Props> = ({
  data: { icon, name, description, maxPoints },
  position
}) => {
  const { anchorProps, tooltipProps, tooltipVisible } = useTooltipPos<
    HTMLButtonElement,
    HTMLDivElement
  >("topRight");
  const [points, setPoints] = useState(0);

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        {...anchorProps}
        onClick={() => setPoints(points + 1)}
        icon={icon}
        outline="gold"
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
