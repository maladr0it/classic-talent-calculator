import React from "react";

import "./TalentTree.css";
import { TreeContext } from "../TreeContext";
import { useTalentContext } from "../TalentContext";
import { Talent } from "./Talent";
import { SquareButton } from "./SquareButton";

interface Props {
  name: string;
}

export const TalentTree: React.FC<Props> = ({ name, children }) => {
  const { data, pointsSpent } = useTalentContext();
  const treeData = data[name];

  return (
    <TreeContext.Provider value={name}>
      <div className="TalentTree">
        <header className="TalentTree-header">
          <SquareButton state="neutral" icon={treeData.icon} />
          <div>
            <h2 className="TalentTree-name">{name}</h2>
            <p className="TalentTree-pointsSpent">
              Points spent: {pointsSpent[name]}
            </p>
          </div>
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
