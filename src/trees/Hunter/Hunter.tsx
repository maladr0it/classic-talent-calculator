import React from "react";

import { data } from "./data";

import { KlassTrees } from "../../views";
import { createTalentProvider } from "../../TalentContext";
import { TalentTree } from "../../components/TalentTree";

const TalentProvider = createTalentProvider(data);

export const Hunter: React.FC = () => {
  return (
    <TalentProvider>
      <KlassTrees klass="Hunter">
        <TalentTree name="Beast Mastery" />
      </KlassTrees>
    </TalentProvider>
  );
};
