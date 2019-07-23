import React from "react";

import { data } from "./data";
import balanceBackground from "../../assets/tree-backgrounds/druid-balance.jpg";
import feralBackground from "../../assets/tree-backgrounds/druid-feral.jpg";

import { TreeContext } from "../../TreeContext";
import { createTalentProvider } from "../../TalentContext";
import { TalentTree } from "../../components/TalentTree";
import { Talent } from "../../components/Talent";
import { Arrow } from "../../components/Arrow";

const TalentProvider = createTalentProvider(data);

export const Druid: React.FC = () => {
  return (
    <TalentProvider>
      <div>
        <h1>Druid</h1>
        <TreeContext.Provider value="Balance">
          <TalentTree background={balanceBackground}>
            <Talent position="a1" name="Improved Wrath" />
            <Talent position="a2" name="Nature's Grasp" />
            <Arrow
              direction="right"
              from="a2"
              to="a3"
              target="Improved Nature's Grasp"
            />
            <Talent position="a3" name="Improved Nature's Grasp" />
          </TalentTree>
        </TreeContext.Provider>
        <TreeContext.Provider value="Feral">
          <TalentTree background={feralBackground}>
            <Talent position="a2" name="Ferocity" />
          </TalentTree>
        </TreeContext.Provider>
      </div>
    </TalentProvider>
  );
};
