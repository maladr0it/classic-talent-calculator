import React from "react";
import { Tooltip } from "./Tooltip";

import "./TalentTooltip.css";
import { useTalentContext } from "../TalentContext";

interface Props extends React.ComponentPropsWithoutRef<typeof Tooltip> {
  name: string;
  tree: string;
}

export const TalentTooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ name, tree, ...rest }, ref) => {
    const {
      state,
      data,
      points,
      pointsMetTalents,
      prereqMetTalents,
      unlockedTalents,
    } = useTalentContext();

    const talentData = data[tree].talents[name];
    const prereqData = talentData.prereq
      ? data[tree].talents[talentData.prereq]
      : null;

    const rank = state[tree][name];
    const pointsMet = pointsMetTalents[tree][name];
    const prereqMet = prereqMetTalents[tree][name];
    const unlocked = unlockedTalents[tree][name];

    return (
      <Tooltip ref={ref} contentClassName="TalentTooltip-content" {...rest}>
        <h1 className="TalentTooltip-title">{name}</h1>
        <p className="TalentTooltip-rank">
          Rank {rank}/{talentData.maxRank}
        </p>
        {!pointsMet && (
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
        {unlocked && rank === 0 && points > 0 && (
          <p className="TalentTooltip-clickToLearn">Click to learn</p>
        )}
      </Tooltip>
    );
  }
);
