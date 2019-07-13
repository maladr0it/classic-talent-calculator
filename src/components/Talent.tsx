import React, { useState } from "react";

import "./Talent.css";
import { useTooltipPos } from "../hooks/useTooltipPos";
import { Position } from "./TalentTree";
import { Tooltip } from "../components/Tooltip";
import { SquareButton } from "./SquareButton";

interface Props {
  position: Position;
  selected: boolean;
  data: {
    icon: string;
    name: string;
    description: (points: number) => string;
    maxPoints: number;
  };
}

export const Talent: React.FC<Props> = ({
  data: { icon, name, description, maxPoints },
  position,
  selected
}) => {
  const {
    anchorRef,
    tooltipRef,
    tooltipPos,
    tooltipVisible,
    setTooltipVisible
  } = useTooltipPos<HTMLButtonElement>("topRight");
  const [points, setPoints] = useState(0);

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        ref={anchorRef}
        onClick={() => setPoints(points + 1)}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        selected={selected}
        icon={icon}
      />
      <div className="Talent-pointCount">{points}/5</div>
      {tooltipVisible && (
        <Tooltip ref={tooltipRef} position={tooltipPos}>
          <h1 style={{ color: "white", position: "relative" }}>Hello fam</h1>
        </Tooltip>
      )}
    </div>
  );
};
