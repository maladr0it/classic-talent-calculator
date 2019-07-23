import { TalentData } from "../../TalentContext/types";
import { talentText } from "../../utils";

import abolishMagic from "../../assets/icons/spell_nature_abolishmagic.jpg";
import abolishMagicGrey from "../../assets/icons/spell_nature_abolishmagic_grey.jpg";
import petHyena from "../../assets/icons/ability_hunter_pet_hyena.jpg";
import petHyenaGrey from "../../assets/icons/ability_hunter_pet_hyena_grey.jpg";
import naturesWrath from "../../assets/icons/spell_nature_natureswrath.jpg";
import naturesWrathGrey from "../../assets/icons/spell_nature_natureswrath_grey.jpg";

export const data: TalentData = {
  Balance: {
    "Improved Wrath": {
      name: "Improved Wrath",
      icon: abolishMagic,
      disabledIcon: abolishMagicGrey,
      description: talentText`Reduces the cast time of your Wrath spell by ${[
        0.1,
        0.2,
        0.3,
        0.4,
        0.5
      ]}%`,
      maxRank: 5,
      requiredPoints: 0
    },
    "Nature's Grasp": {
      name: "Nature's Grasp",
      icon: naturesWrath,
      disabledIcon: naturesWrathGrey,
      description: talentText`While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1). Only useable outdoors. 1 charge. Lasts 45 sec.`,
      maxRank: 1,
      requiredPoints: 0
    },
    "Improved Nature's Grasp": {
      name: "Improved Nature's Grasp",
      icon: naturesWrath,
      disabledIcon: naturesWrathGrey,
      description: talentText`Increases the chance of your Nature's Grasp to entangle an enemy by ${[
        15,
        30,
        45,
        65
      ]}%`,
      maxRank: 4,
      requiredPoints: 0,
      prereq: "Nature's Grasp"
    }
  },
  Feral: {
    Ferocity: {
      name: "Ferocity",
      icon: petHyena,
      disabledIcon: petHyenaGrey,
      description: talentText`Reduces the cost of your Maul, Swipe, Claw and Rake abilities by ${[
        1,
        2,
        3,
        4,
        5
      ]} Rage or Energy.`,
      maxRank: 5,
      requiredPoints: 0
    }
  }
};
