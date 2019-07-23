import React from "react";
import { Tooltip } from "./Tooltip";

import "./TalentTooltip.css";

interface Props extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  name: string;
  points: number;
  description: (points: number) => string;
}

export const TalentTooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ name, points, description, ...rest }, ref) => {
    return (
      <Tooltip ref={ref} contentClassname="TalentTooltip-content" {...rest}>
        <h1 className="TalentTooltip-title">{name}</h1>
        <p className="TalentTooltip-description">{description(points + 1)}</p>
      </Tooltip>
    );
  }
);
