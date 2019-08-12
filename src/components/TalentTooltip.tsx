import React from "react";
import { Tooltip } from "./Tooltip";

import "./TalentTooltip.css";
import { useTalentContext } from "../TalentContext";
import {
  getTalentRank,
  areReqPointsMet,
  isPrereqMet,
  isTalentUnlocked,
  getTalentData,
  getPointsLeft,
} from "../TalentContext/selectors";

interface Props extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  name: string;
  tree: string;
}

export const TalentTooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ name, tree, ...rest }, ref) => {
    const { state, data } = useTalentContext();

    // TODO: all these getters are potentially costly & redundant
    const pointsLeft = getPointsLeft(state);
    const talentData = getTalentData(data, tree, name);
    const prereqData = talentData.prereq
      ? getTalentData(data, tree, talentData.prereq)
      : null;
    const rank = getTalentRank(state, tree, name);
    const reqPointsMet = areReqPointsMet(state, data, tree, name);
    const prereqMet = isPrereqMet(state, data, tree, name);
    const unlocked = isTalentUnlocked(state, data, tree, name);

    return (
      <Tooltip ref={ref} contentClassName="TalentTooltip-content" {...rest}>
        <h1 className="TalentTooltip-title">{name}</h1>
        <p className="TalentTooltip-rank">
          Rank {rank}/{talentData.maxRank}
        </p>
        {!reqPointsMet && (
          <p className="TalentTooltip-error">
            Requires {talentData.reqPoints} points in {tree} Talents
          </p>
        )}
        {prereqData && !prereqMet && (
          <p className="TalentTooltip-error">
            Requires {prereqData.maxRank} point
            {prereqData.maxRank > 1 ? "s" : ""} in {prereqData.name}
          </p>
        )}
        <p className="TalentTooltip-description">
          {rank === 0
            ? talentData.description(rank + 1)
            : talentData.description(rank)}
        </p>
        {rank !== 0 && rank < talentData.maxRank && (
          <>
            <br />
            <p>Next rank:</p>
            <p className="TalentTooltip-description">
              {talentData.description(rank + 1)}
            </p>
          </>
        )}
        {rank > 0 && (
          <p className="TalentTooltip-error">Right-click to unlearn</p>
        )}
        {unlocked && rank === 0 && pointsLeft > 0 && (
          <p className="TalentTooltip-clickToLearn">Click to learn</p>
        )}
      </Tooltip>
    );
  },
);
