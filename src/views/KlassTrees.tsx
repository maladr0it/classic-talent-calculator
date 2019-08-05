import React, { useEffect } from "react";
import { withRouter, matchPath, RouteComponentProps } from "react-router-dom";

import "./KlassTrees.css";
import { config } from "../config";
import { useTalentContext } from "../TalentContext";
import { TalentTree } from "../components/TalentTree";
import { ClearButton } from "../components/ClearButton";
import {
  getPointsSpent,
  getPointsLeft,
  getStateFromHash,
} from "../TalentContext/selectors";

interface Props extends RouteComponentProps {
  klass: string;
}

export const KlassTrees = withRouter<Props, React.FC<Props>>(
  ({ location, klass }) => {
    const { state, data, resetAll, restoreState } = useTalentContext();

    const pointsSpent = getPointsSpent(state);
    const pointsLeft = getPointsLeft(state);

    const treeNames = Object.keys(data);
    const treePoints = Object.values(pointsSpent).map(
      (value, i, arr) => `${value}${i < arr.length - 1 ? "/" : ""}`,
    );
    const requiredLevel =
      config.TOTAL_POINTS - pointsLeft + config.FIRST_POINT_LEVEL - 1;

    useEffect(() => {
      const match = matchPath<{ skills: string }>(location.pathname, {
        path: "/:class/:skills",
      });
      // match.log
      if (match && match.params && match.params.skills) {
        const hash = match.params.skills;
        console.log("restoring application state:", match.params.skills);
        console.log(getStateFromHash(data, hash));
        const newState = getStateFromHash(data, hash);
        restoreState(newState);
      }
    }, []);

    return (
      <div className="KlassTrees-container">
        <div className="KlassTrees">
          <div className="KlassTrees-header">
            <div className="KlassTrees-titleArea">
              <h1>
                {klass} {treePoints}
              </h1>
              <p className="KlassTrees-summary">
                Required level: {requiredLevel >= 10 ? requiredLevel : "-"}
              </p>
              <p className="KlassTrees-summary">Points left: {pointsLeft}</p>
            </div>
            <ClearButton onClick={() => resetAll()}>Clear all</ClearButton>
          </div>
          <div className="KlassTrees-list">
            {treeNames.map(name => (
              <TalentTree key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    );
  },
);
