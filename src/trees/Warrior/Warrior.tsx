import React from "react";

import { data } from "./data";

import { KlassTrees } from "../../views";
import { createTalentProvider } from "../../TalentContext";

const TalentProvider = createTalentProvider(data);

export const Warrior: React.FC = () => {
  return (
    <TalentProvider>
      <KlassTrees klass="Warrior" />
    </TalentProvider>
  );
};
