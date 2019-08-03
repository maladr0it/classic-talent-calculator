import React from "react";

import "./KlassTrees.css";
import { config } from "../config";
import { useTalentContext } from "../TalentContext";
import { TalentTree } from "../components/TalentTree";

interface Props {
  klass: string;
}

export const KlassTrees: React.FC<Props> = ({ klass }) => {
  const { data, points, pointsSpent } = useTalentContext();
  const treeNames = Object.keys(data);
  const treePoints = Object.values(pointsSpent).map(
    (value, i, arr) => `${value}${i < arr.length - 1 ? "/" : ""}`,
  );
  const requiredLevel =
    config.TOTAL_POINTS - points + config.FIRST_POINT_LEVEL - 1;

  return (
    <div className="KlassTrees-container">
      <div className="KlassTrees">
        <div className="KlassTrees-header">
          <h1>
            {klass} {treePoints}
          </h1>
          <p>Required level: {requiredLevel >= 10 ? requiredLevel : "-"}</p>
          <p>Points left: {points}</p>
        </div>
        <div className="KlassTrees-list">
          {treeNames.map(name => (
            <TalentTree key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};
