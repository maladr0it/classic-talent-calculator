import React from "react";

import "./TalentTree.css";
import { TreeContext } from "../TreeContext";
import { useTalentContext } from "../TalentContext";
import { Talent } from "./Talent";
import { SquareButton } from "./SquareButton";
import { ClearButton } from "./ClearButton";
import { getTreePointsSpent, getTreeData } from "../TalentContext/selectors";

interface Props {
  name: string;
}

export const TalentTree: React.FC<Props> = ({ name, children }) => {
  const { state, data, resetTree } = useTalentContext();
  const pointsSpent = getTreePointsSpent(state, name);
  const treeData = getTreeData(data, name);

  return (
    <TreeContext.Provider value={name}>
      <div className="TalentTree">
        <header className="TalentTree-header">
          <SquareButton className="TalentTree-icon" icon={treeData.icon} />
          <div style={{ flex: 1 }}>
            <h2 className="TalentTree-name" style={{ flex: 1 }}>
              {name}
            </h2>
            <p className="TalentTree-pointsSpent">
              Points spent: {pointsSpent}
            </p>
          </div>
          <ClearButton onClick={() => resetTree(name)} />
        </header>
        <div
          className="TalentTree-grid"
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
