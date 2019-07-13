import React, { useRef, useState, useLayoutEffect } from "react";

import "./Talent.css";
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
  const itemRef = useRef<HTMLButtonElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (!tooltipVisible || tooltipRef.current === null) {
      return;
    }

    // tooltipRef.current.style.backgroundColor = "orange";
  }, [tooltipVisible]);

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton
        ref={itemRef}
        onClick={() => setPoints(points + 1)}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        selected={selected}
        icon={icon}
      />
      <div className="Talent-pointCount">{points}/5</div>
      {tooltipVisible && (
        <Tooltip ref={tooltipRef}>
          <h1 style={{ color: "white", position: "relative" }}>
            Hello fam fadmfds fdaslfd sfdsa fdsa there
          </h1>
        </Tooltip>
      )}
    </div>
  );
};
