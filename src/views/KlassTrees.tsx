import React, { useEffect } from "react";
import { withRouter, matchPath, RouteComponentProps } from "react-router-dom";

import "./KlassTrees.css";
import { config } from "../config";
import {
  useTalentContext,
  getPointsLeft,
  getTreePointsSpent,
  getStateFromHash,
  getHashFromState,
} from "../TalentContext";
import { TalentTree } from "../components/TalentTree";
import { ClearButton } from "../components/ClearButton";

interface Props extends RouteComponentProps {
  klass: string;
}

export const KlassTrees = withRouter<Props, React.FC<Props>>(
  ({ klass, location, history }) => {
    const { state, data, resetAll, restoreState } = useTalentContext();

    const pointsLeft = getPointsLeft(state);
    const treeNames = Object.keys(data);
    const treePointsSpent = treeNames
      .map(treeName => getTreePointsSpent(state, treeName))
      .join("/");

    const requiredLevel =
      config.TOTAL_POINTS - pointsLeft + config.FIRST_POINT_LEVEL - 1;

    // TODO: move this into a hook?
    useEffect(() => {
      const match = matchPath<{ skills: string }>(location.pathname, {
        path: "/:klass/:skills",
      });
      const hash = match && match.params && match.params.skills;
      if (hash) {
        restoreState(getStateFromHash(data, hash));
      }
    }, []);

    useEffect(() => {
      const match = matchPath<{ klass: string }>(location.pathname, {
        path: "/:klass",
      });
      const klass = match && match.params && match.params.klass;
      const skillHash = getHashFromState(state);
      if (skillHash) {
        history.replace(`/${klass}/${skillHash}`);
      } else {
        history.replace(`/${klass}`);
      }
    }, [state]);

    return (
      <div className="KlassTrees-container">
        <div className="KlassTrees">
          <div className="KlassTrees-header">
            <div className="KlassTrees-titleArea">
              <h1>
                {klass} {treePointsSpent}
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
