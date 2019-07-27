import React from "react";

import "./TalentTree.css";
import { TreeContext } from "../TreeContext";
import {
  useTalentContext,
  getPointsSpent,
  getTreeData,
} from "../TalentContext";
import { Talent } from "./Talent";

interface Props {
  name: string;
  background: string;
}

export const TalentTree: React.FC<Props> = ({ name, background, children }) => {
  const { state } = useTalentContext();
  const treeData = getTreeData(state, name);
  const pointsSpent = getPointsSpent(state, name);
  return (
    <TreeContext.Provider value={name}>
      <div>
        <h2>
          points spent in {name}: {pointsSpent}
        </h2>
        <div
          className="TalentTree"
          style={{ backgroundImage: `url(${background})` }}
        >
          {Object.keys(treeData).map(talentName => (
            <Talent key={talentName} name={talentName} />
          ))}
          {children}
        </div>
      </div>
    </TreeContext.Provider>
  );
};
