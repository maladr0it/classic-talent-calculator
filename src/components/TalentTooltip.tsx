import React from "react";
import { Tooltip } from "./Tooltip";

import "./TalentTooltip.css";
import {
  useTalentContext,
  getTalentData,
  getTalentRank,
  getPointsSpent,
} from "../TalentContext";
import { isTalentMaxed, isTalentAvailable } from "../TalentContext/selectors";

interface Props extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  name: string;
  tree: string;
}

export const TalentTooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ name, tree, ...rest }, ref) => {
    const { state } = useTalentContext();
    const { description, requiredPoints, maxRank, prereq } = getTalentData(
      state,
      tree,
      name
    );
    const prereqData = prereq ? getTalentData(state, tree, prereq) : null;
    const prereqMet = prereq ? isTalentMaxed(state, tree, prereq) : null;
    const pointsSpent = getPointsSpent(state, tree);
    const rank = getTalentRank(state, tree, name);
    // TODO: many redundant calls here, can like derive all necessary information with 1 selector
    const available = isTalentAvailable(state, tree, name);

    return (
      <Tooltip ref={ref} contentClassName="TalentTooltip-content" {...rest}>
        <h1 className="TalentTooltip-title">{name}</h1>
        <p className="TalentTooltip-rank">
          Rank {rank}/{maxRank}
        </p>
        {pointsSpent < requiredPoints && (
          <p className="TalentTooltip-error">
            Requires {requiredPoints} points in {tree} Talents
          </p>
        )}
        {prereqData && !prereqMet && (
          <p className="TalentTooltip-error">
            Requires {prereqData.maxRank} point
            {prereqData.maxRank > 1 ? "s" : ""} in {prereqData.name}
          </p>
        )}
        <p className="TalentTooltip-description">
          {rank === 0 ? description(rank + 1) : description(rank)}
        </p>
        {rank !== 0 && rank < maxRank && (
          <>
            <br />
            <p>Next rank:</p>
            <p className="TalentTooltip-description">{description(rank + 1)}</p>
          </>
        )}
        {available && rank === 0 && (
          <p className="TalentTooltip-clickToLearn">Click to learn</p>
        )}
      </Tooltip>
    );
  }
);
