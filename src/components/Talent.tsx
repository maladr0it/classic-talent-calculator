import React, { useState } from "react";

import "./Talent.css";
import { Position } from "./TalentTree";
import { SquareButton } from "./SquareButton";

interface Props {
  icon: string;
  position: Position;
  selected: boolean;
  name: string;
  description: (points: number) => string;
  maxPoints: number;
}

export const Talent: React.FC<Props> = ({
  name,
  description,
  maxPoints,
  position,
  ...rest
}) => {
  const [points, setPoints] = useState(0);

  return (
    <div className="Talent-container" style={{ gridArea: position }}>
      <SquareButton onClick={() => setPoints(points + 1)} {...rest} />
      <div className="Talent-pointCount">{points}/5</div>
    </div>
  );
};
