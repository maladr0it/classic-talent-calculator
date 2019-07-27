import { TalentData } from "../../TalentContext/types";
import { talentText, requireAll } from "../../utils";

const icons = requireAll(require.context("../../assets/icons/druid"));

export const data: TalentData = {
  Balance: {
    "Improved Wrath": {
      name: "Improved Wrath",
      icon: icons["spell_nature_abolishmagic"],
      maxRank: 5,
      requiredPoints: 0,
      description: talentText`Reduces the cast time of your Wrath spell by ${[
        0.1,
        0.2,
        0.3,
        0.4,
        0.5,
      ]} sec.`,
    },
    "Nature's Grasp": {
      name: "Nature's Grasp",
      icon: icons["spell_nature_natureswrath"],
      maxRank: 1,
      requiredPoints: 0,
      description: talentText`While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1). Only useable outdoors. 1 charge. Lasts 45 sec.`,
    },
    "Improved Nature's Grasp": {
      name: "Improved Nature's Grasp",
      icon: icons["spell_nature_natureswrath"],
      maxRank: 4,
      requiredPoints: 0,
      prereq: "Nature's Grasp",
      description: talentText`Increases the chance of your Nature's Grasp to entangle an enemy by ${[
        15,
        30,
        45,
        65,
      ]}%.`,
    },
    "Improved Entangling Roots": {
      name: "Improved Entangling Roots",
      icon: icons["spell_nature_stranglevines"],
      maxRank: 3,
      requiredPoints: 5,
      description: talentText`Gives you a ${[
        40,
        70,
        100,
      ]}% chance to avoid interruption caused by damage while casting Entangling Roots.`,
    },
    "Improved Moonfire": {
      name: "Improved Moonfire",
      icon: icons["spell_nature_starfall"],
      maxRank: 5,
      requiredPoints: 5,
      description: talentText`Increases the damage and critical strike chance of your Moonfire spell by ${[
        2,
        4,
        6,
        8,
        10,
      ]}%.`,
    },
    "Natural Weapons": {
      name: "Natural Weapons",
      icon: icons["inv_staff_01"],
      maxRank: 5,
      requiredPoints: 5,
      description: talentText`Increases the damage you deal with physical attacks in all forms by ${[
        2,
        4,
        6,
        8,
        10,
      ]}%.`,
    },
    "Natural Shapeshifter": {
      name: "Natural Shapeshifter",
      icon: icons["spell_nature_wispsplode"],
      maxRank: 3,
      requiredPoints: 5,
      description: talentText`Reduces the mana cost of all shapeshifting by ${[
        10,
        20,
        30,
      ]}%.`,
    },
    "Improved Thorns": {
      name: "Improved Thorns",
      icon: icons["spell_nature_thorns"],
      maxRank: 3,
      requiredPoints: 10,
      description: talentText`Increases the damage caused by your Thorns spell by ${[
        25,
        50,
        75,
      ]}%.`,
    },
    "Omen of Clarity": {
      name: "Omen of Clarity",
      icon: icons["spell_nature_crystalball"],
      maxRank: 1,
      requiredPoints: 10,
      prereq: "Natural Weapons",
      description: talentText`Imbues the druid with natural energy. Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage, or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 10 min.`,
    },
    "Nature's Reach": {
      name: "Nature's Reach",
      icon: icons["spell_nature_naturetouchgrow"],
      maxRank: 2,
      requiredPoints: 10,
      description: talentText`Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by ${[
        10,
        20,
      ]}%.`,
    },
  },
  Feral: {
    Ferocity: {
      name: "Ferocity",
      icon: icons["ability_hunter_pet_hyena"],
      maxRank: 5,
      requiredPoints: 0,
      description: talentText`Reduces the cost of your Maul, Swipe, Claw and Rake abilities by ${[
        1,
        2,
        3,
        4,
        5,
      ]} Rage or Energy.`,
    },
  },
};
