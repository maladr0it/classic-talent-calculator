import React from "react";

import { data } from "./data";
import balanceBackground from "../../assets/tree-backgrounds/druid-balance.jpg";
import feralBackground from "../../assets/tree-backgrounds/druid-feral.jpg";
import restorationBackground from "../../assets/tree-backgrounds/druid-restoration.jpg";

import { KlassTrees } from "../../views";
import { createTalentProvider } from "../../TalentContext";
import { TalentTree } from "../../components/TalentTree";

const TalentProvider = createTalentProvider(data);

export const Druid: React.FC = () => {
  return (
    <TalentProvider>
      <KlassTrees klass="Druid">
        <TalentTree name="Balance" background={balanceBackground} />
        <TalentTree name="Feral" background={feralBackground} />
        <TalentTree name="Restoration" background={restorationBackground} />
      </KlassTrees>
    </TalentProvider>
  );
};
