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
          <Talent pos="a1" name="Improved Wrath" />
          <Talent pos="a2" name="Nature's Grasp" />
          <Arrow
            direction="right"
            from="a2"
            to="a3"
            target="Improved Nature's Grasp"
          />
          <Talent pos="a3" name="Improved Nature's Grasp" />
          <Talent pos="b1" name="Improved Entangling Roots" />
          <Talent pos="b2" name="Improved Moonfire" />
          <Talent pos="b3" name="Natural Weapons" />
          <Talent pos="b4" name="Natural Shapeshifter" />
          <Talent pos="c1" name="Improved Thorns" />
          <Arrow direction="down" from="b3" to="c3" target="Omen of Clarity" />
          <Talent pos="c3" name="Omen of Clarity" />
          <Talent pos="c4" name="Nature's Reach" />
          <Arrow direction="down" from="b2" to="d2" target="Vengeance" />
          <Talent pos="d2" name="Vengeance" />
          <Talent pos="d3" name="Improved Starfire" />
          <Talent pos="e2" name="Nature's Grace" />
          <Talent pos="e3" name="Moonglow" />
          <Arrow direction="down" from="e2" to="f2" target="Moonfury" />
          <Talent pos="f2" name="Moonfury" />
          <Talent pos="g2" name="Moonkin Form" />
        </TalentTree>
        <TalentTree name="Feral" background={feralBackground}>
          <Talent pos="a2" name="Ferocity" />
          <Talent pos="a3" name="Feral Aggression" />
          <Talent pos="b1" name="Feral Instinct" />
          <Talent pos="b2" name="Brutal Impact" />
          <Talent pos="b3" name="Thick Hide" />
          <Talent pos="c1" name="Feline Swiftness" />
          <Talent pos="c2" name="Feral Charge" />
          <Talent pos="c3" name="Sharpened Claws" />
          <Talent pos="d1" name="Improved Shred" />
          <Talent pos="d2" name="Predatory Strikes" />
          <Arrow direction="down" from="c3" to="d3" target="Blood Frenzy" />
          <Talent pos="d3" name="Blood Frenzy" />
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
          <Talent pos="d4" name="Primal Fury" />
          <Talent pos="e1" name="Savage Fury" />
          <Talent pos="e3" name="Faerie Fire (Feral)" />
          <Arrow
            direction="down"
            from="d2"
            to="f2"
            target="Heart of the Wild"
          />
          <Talent pos="f2" name="Heart of the Wild" />
          <Talent pos="g2" name="Leader of the Pack" />
        </TalentTree>
        <TalentTree name="Restoration" background={restorationBackground}>
          <Talent pos="a2" name="Improved Mark of the Wild" />
        </TalentTree>
      </KlassTrees>
    </TalentProvider>
  );
};
