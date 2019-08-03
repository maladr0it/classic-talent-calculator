import React from "react";

import "./TalentTree.css";
import { TreeContext } from "../TreeContext";
import { useTalentContext } from "../TalentContext";
import { Talent } from "./Talent";

interface Props {
  name: string;
}

export const TalentTree: React.FC<Props> = ({ name, children }) => {
  const { data, pointsSpent } = useTalentContext();
  const treeData = data[name];

  return (
    <TreeContext.Provider value={name}>
      <div>
        <h2>
          points spent in {name}: {pointsSpent[name]}
        </h2>
        <div
          className="TalentTree"
          style={{ backgroundImage: `url(${treeData.background})` }}
        >
          {Object.keys(treeData.talents).map(talentName => (
            <Talent key={talentName} name={talentName} />
          ))}
          {children}
        </div>
      </div>
    </TreeContext.Provider>
  );
};
