import React from "react";
import { Tooltip } from "./Tooltip";

import "./TalentTooltip.css";

interface Props extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  name: string;
  rank: number;
  maxRank: number;
  description: (rank: number) => string;
}

export const TalentTooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ name, rank, maxRank, description, ...rest }, ref) => {
    return (
      <Tooltip ref={ref} contentClassname="TalentTooltip-content" {...rest}>
        <h1 className="TalentTooltip-title">{name}</h1>
        <p>
          rank {rank} / {maxRank}
        </p>
        <p className="TalentTooltip-description">
          {rank === 0 ? description(rank + 1) : description(rank)}
        </p>
        {rank !== 0 && rank < maxRank && (
          <p className="TalentTooltip-description">
            Next rank: {description(rank + 1)}
          </p>
        )}
        {rank === 0 && <p>click to learn</p>}
      </Tooltip>
    );
  }
);
