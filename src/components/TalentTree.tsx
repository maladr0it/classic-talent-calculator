import React from "react";

import "./TalentTree.css";
import { TreeContext } from "../TreeContext";
import { useTalentContext, getPointsSpent } from "../TalentContext";

export type Position =
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "d1"
  | "d2"
  | "d3"
  | "d4"
  | "e1"
  | "e2"
  | "e3"
  | "e4"
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "g1"
  | "g2"
  | "g3"
  | "g4";

interface Props {
  name: string;
  background: string;
}

export const TalentTree: React.FC<Props> = ({ name, background, children }) => {
  const { state } = useTalentContext();
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
          {children}
        </div>
      </div>
    </TreeContext.Provider>
  );
};
