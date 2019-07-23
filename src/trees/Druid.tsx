import React from "react";

import { talentText } from "../utils";
import backgroundImage from "../assets/druid-background.jpg";
import { TalentTree } from "../components/TalentTree";
import { Talent } from "../components/Talent";
import { Arrow } from "../components/Arrow";

import MOCK_ICON from "../assets/spell_nature_abolishmagic.jpg";

const TREE_DATA = {
  "Improved Wrath": {
    name: "Improved Wrath",
    icon: MOCK_ICON,
    description: talentText`Reduces the cast time of your Wrath spell by ${[
      0.1,
      0.2,
      0.3,
      0.4,
      0.5
    ]}%`,
    maxPoints: 5
  }
};

export const Druid: React.FC = () => {
  return (
    <div>
      <h1>Druid</h1>
      <TalentTree backgroundURL={backgroundImage}>
        <Talent position="a1" data={TREE_DATA["Improved Wrath"]} />
        {/* <Arrow direction="right" from="a2" to="a3" />
        <Talent position="a3" selected imageURL={MOCK_ICON} />
        <Arrow direction="down" from="a2" to="d2" />
        <Talent position="d2" selected imageURL={MOCK_ICON} />
        <Talent position="c4" selected imageURL={MOCK_ICON} />
        <Arrow direction="right-down" from="a3" to="a4" />
        <Arrow direction="right-down-down" from="a4" to="c4" /> */}
      </TalentTree>
    </div>
  );
};
