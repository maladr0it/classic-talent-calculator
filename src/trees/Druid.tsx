import React from "react";

import { talentText } from "../utils";
import backgroundImage from "../assets/druid-background.jpg";
import { TalentTree } from "../components/TalentTree";
import { Talent } from "../components/Talent";
import { Arrow } from "../components/Arrow";

import MOCK_ICON from "../assets/druid-icon.jpg";

// talents have:
// name
// icon
// description (function depending on number of points spent)
// max points spendable (e.g. 5)

const TREE_DATA = {
  "Improved Wrath": {
    name: "Improved Wrath",
    description: talentText`Reduces the cast time of your Wrath spell by ${[
      0.1,
      0.2,
      0.3,
      0.4,
      0.5
    ]}%`,
    icon: MOCK_ICON,
    maxPoints: 5
  }
};

export const Druid: React.FC = () => {
  return (
    <div>
      <h1>Druid</h1>
      <TalentTree backgroundURL={backgroundImage}>
        <Talent position="a2" selected {...TREE_DATA["Improved Wrath"]} />
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
