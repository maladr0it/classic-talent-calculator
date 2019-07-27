import React from "react";

import "./KlassTrees.css";
import { useTalentContext } from "../TalentContext";
import { TalentTree } from "../components/TalentTree";

interface Props {
  klass: string;
}

export const KlassTrees: React.FC<Props> = ({ klass }) => {
  const { state } = useTalentContext();
  const treeNames = Object.keys(state.talentData);

  return (
    <div className="KlassTrees">
      <h1>{klass} talents</h1>
      <div className="KlassTrees-list">
        {treeNames.map(name => (
          <TalentTree key={name} name={name} />
        ))}
      </div>
    </div>
  );
};
