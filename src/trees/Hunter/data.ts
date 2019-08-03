import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/hunter"),
);
const icons = requireAll(require.context("../../assets/icons/hunter"));

export const data: TalentData = {
  "Beast Mastery": {
    name: "Beast Mastery",
    background: backgrounds["beast-mastery"],
    icon: "",
    talents: {
      "Improved Aspect of the Hawk": {
        name: "Improved Aspect of the Hawk",
        pos: "a2",
        icon: icons["spell_nature_ravenform"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`While Aspect of the Hawk is active, all normal ranged attacks have a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance of increasing ranged attack speed by 30% for 12 sec.`,
      },
      "Endurance Training": {
        name: "Endurance Training",
        pos: "a3",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the Health of your pets by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Eyes of the Beast": {
        name: "Improved Eyes of the Beast",
        pos: "b1",
        icon: icons["ability_eyeoftheowl"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the duration of your Eyes of the Beast by ${[
          30,
          60,
        ]} sec.`,
      },
      "Improved Aspect of the Monkey": {
        name: "Improved Aspect of the Monkey",
        pos: "b2",
        icon: icons["ability_hunter_aspectofthemonkey"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the Dodge bonus of your Aspect of the Monkey by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Thick Hide": {
        name: "Thick Hide",
        pos: "b3",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the Armor rating of your pets by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Improved Revive Pet": {
        name: "Improved Revive Pet",
        pos: "b4",
        icon: icons["ability_hunter_beastsoothe"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Revive Pet's casting time is reduced by ${[
          3,
          6,
        ]} sec, mana cost is reduced by ${[
          20,
          40,
        ]}%, and increases the health your pet returns with by an additional ${[
          15,
          30,
        ]}%.`,
      },
      Pathfinding: {
        name: "Pathfinding",
        pos: "c1",
        icon: icons["ability_mount_jungletiger"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ${[
          3,
          6,
        ]}%.`,
      },
      "Bestial Swiftness": {
        name: "Bestial Swiftness",
        pos: "c2",
        icon: icons["ability_druid_dash"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Increases the outdoor movement speed of your pets by 30%`,
      },
      "Unleashed Fury": {
        name: "Unleashed Fury",
        pos: "c3",
        icon: icons["ability_bullrush"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the damage done by your pets by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Improved Mend Pet": {
        name: "Improved Mend Pet",
        pos: "d2",
        icon: icons["ability_hunter_mendpet"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives the Mend Pet spell a ${[
          15,
          50,
        ]}% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.`,
      },
      Ferocity: {
        name: "Ferocity",
        pos: "d3",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the critical strike chance of your pets by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Spirit Bond": {
        name: "Spirit Bond",
        pos: "e1",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`While your pet is active, you and your pet will regenerate ${[
          1,
          2,
        ]}% of total health every 10 sec.`,
      },
      Intimidation: {
        name: "Intimidation",
        pos: "e2",
        icon: icons["ability_devour"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec.`,
      },
      "Bestial Discipline": {
        name: "Bestial Discipline",
        pos: "e4",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increase the Focus regeneration of your pets by ${[
          10,
          20,
        ]}%.`,
      },
      Frenzy: {
        name: "Frenzy",
        pos: "f3",
        icon: icons["inv_misc_monsterclaw_03"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Ferocity",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Gives your pet a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.`,
      },
      "Bestial Wrath": {
        name: "Bestial Wrath",
        pos: "g2",
        icon: icons["ability_druid_ferociousbite"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Intimidation",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.`,
      },
    },
  },
};
