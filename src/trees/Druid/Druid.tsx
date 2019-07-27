import React from "react";

import { data } from "./data";
import balanceBackground from "../../assets/tree-backgrounds/druid-balance.jpg";
import feralBackground from "../../assets/tree-backgrounds/druid-feral.jpg";
import restorationBackground from "../../assets/tree-backgrounds/druid-restoration.jpg";

import { KlassTrees } from "../../views";
import { createTalentProvider } from "../../TalentContext";
import { TalentTree } from "../../components/TalentTree";
import { Talent } from "../../components/Talent";
import { Arrow } from "../../components/Arrow";

const TalentProvider = createTalentProvider(data);

export const Druid: React.FC = () => {
  return (
    <TalentProvider>
      <KlassTrees klass="Druid">
        <TalentTree name="Balance" background={balanceBackground}>
          <Arrow
            direction="right"
            from="a2"
            to="a3"
            target="Improved Nature's Grasp"
          />
          <Arrow direction="down" from="b3" to="c3" target="Omen of Clarity" />
          <Arrow direction="down" from="b2" to="d2" target="Vengeance" />
          <Arrow direction="down" from="e2" to="f2" target="Moonfury" />
        </TalentTree>
        <TalentTree name="Feral" background={feralBackground}>
          <Arrow direction="down" from="c3" to="d3" target="Blood Frenzy" />
          <Arrow
            direction="right-down"
            from="c3"
            to="c4"
            target="Primal Fury"
          />
          <Arrow
            direction="right-down-down"
            from="c4"
            to="d4"
            target="Primal Fury"
          />
          <Arrow
            direction="down"
            from="d2"
            to="f2"
            target="Heart of the Wild"
          />
        </TalentTree>
        <TalentTree name="Restoration" background={restorationBackground} />
      </KlassTrees>
    </TalentProvider>
  );
};
