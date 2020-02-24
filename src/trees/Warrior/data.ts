import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warrior"),
);
const icons = requireAll(require.context("../../assets/icons/warrior"));

export const data: TalentData = {
  Arms: {
    name: "Arms",
    background: backgrounds["arms"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Improved Heroic Strike": {
        name: "Improved Heroic Strike",
        pos: "a1",
        icon: icons["ability_rogue_ambush"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the critical strike chance of your Heroic Strike ability by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Deflection": {
        name: "Deflection",
        pos: "a3",
        icon: icons["ability_parry"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases your Parry chance by ${[
          3,
	  6,
        ]}%.`,
      },
      "Improved Charge": {
        name: "Improved Charge",
        pos: "b1",
        icon: icons["ability_warrior_charge"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the amount of rage generated by your Charge ability by ${[
          5,
          10,
        ]}. In addition, increases the range of your charge by ${[
          3,
          6,
        ]} yards.`,
      },
      "Tactical Mastery": {
        name: "Tactical Mastery",
        pos: "a2",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`You retain up to ${[
          5,
          10,
          15,
          20,
          25,
        ]} of your rage points when you change stances.`,
      },
      "Improved Thunder Clap": {
        name: "Improved Thunder Clap",
        pos: "b4",
        icon: icons["ability_thunderclap"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the slow effect and damage of your Thunder Clap ability by ${[
          50,
          100,
          150,
        ]}%.`,
      },
      "Duelist": {
        name: "Duelist",
        pos: "b3",
        icon: icons["ability_warrior_challange"],
        maxRank: 2,
        reqPoints: 5,
        prereq: "Deflection",
        arrows: [{ dir: "down", from: "a3", to: "b3" }],
        description: talentText`Increases the critical strike chance of your Overpower and Revenge abilities by ${[
          25,
          50,
        ]}% and reduces the cooldown of your Retaliation ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Anger Management": {
        name: "Anger Management",
        pos: "c2",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Tactical Mastery",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Increases the time required for your rage to decay while out of combat by 30%.`,
      },
      "Deep Wounds": {
        name: "Deep Wounds",
        pos: "c4",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Impale",
        arrows: [{ dir: "right", from: "c3", to: "c4" }],
        description: talentText`Your critical strikes cause the opponent to bleed, dealing ${[
          30,
          60,
          90,
        ]}% of your melee weapon's average damage over 12 sec.`,
      },
      "Maim": {
        name: "Maim",
        pos: "e4",
        icon: icons["ability_rogue_feigndeath"],
        maxRank: 3,
        reqPoints: 20,
        prereq: "Deep Wounds",
        arrows: [{ dir: "down", from: "c4", to: "e4" }],
        description: talentText`Your normal melee swings have a 10% chance to injure target, increasing physical damage taken by ${[
          5,
          10,
          15,
        ]}% for 10 sec.`,
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization",
        pos: "e3",
        icon: icons["inv_axe_09"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Impale": {
        name: "Impale",
        pos: "c3",
        icon: icons["ability_searingarrow"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by ${[
          10,
          20,
        ]}%.`,
      },
      "Poleaxe Specialization": {
        name: "Poleaxe Specialization",
        pos: "d1",
        icon: icons["inv_weapon_halbard_01"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to get a critical strike with Axes and Polearms by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Sweeping Strikes": {
        name: "Sweeping Strikes",
        pos: "e2",
        icon: icons["ability_rogue_slicedice"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Your next 10 melee attacks strike an additional nearby opponent.`,
      },
      "Mace Specialization": {
        name: "Mace Specialization",
        pos: "d2",
        icon: icons["inv_mace_01"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Causes your attacks with maces to ignore up to ${[
          180,
          360,
          540,
          720,
          900,
        ]}(scales with your level) of your target's armor.`,
      },
      "Sword Specialization": {
        name: "Sword Specialization",
        pos: "d3",
        icon: icons["inv_sword_27"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to get an extra attack on the same target after dealing damage with your Sword.`,
      },
      "Improved Hamstring": {
        name: "Improved Hamstring",
        pos: "c1",
        icon: icons["ability_shockwave"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the duration of your Hamstring by ${[
          5,
          10,
          15,
        ]} and reduces target speed by an additional 5%.`,
      },
      "Parabellum": {
        name: "Parabellum",
        pos: "f1",
        icon: icons["spell_holy_prayerofhealing"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Reduces the cooldown of your abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Dog of War": {
        name: "Dog of War",
        pos: "f3",
        icon: icons["spell_holy_prayerofhealing"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Reduces the rage cost of your abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Mortal Strike": {
        name: "Mortal Strike",
        pos: "g2",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Sweeping Strikes",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`A vicious strike that deals weapon damage plus 100 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec. Deals increased damage against wounded targets.`,
      },
      "Improved Mortal Strike": {
        name: "Improved Mortal Strike",
        pos: "g3",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 2,
        reqPoints: 30,
        prereq: "Mortal Strike",
        arrows: [{ dir: "right", from: "g2", to: "g3" }],
        description: talentText`Reduces cooldown of your Mortal Strike ability by ${[
          1,
          2,
        ]} sec.`,
      },
    },
  },
  Fury: {
    name: "Fury",
    background: backgrounds["fury"],
    icon: icons["ability_warrior_innerrage"],
    talents: {
      "Combat Endurance": {
        name: "Combat Endurance",
        pos: "a1",
        icon: icons["booming_voice"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Allows ${[
          10,
          20,
	  30,
        ]}% of your Health regeneration to work while in combat.`,
      },
      "Booming Voice": {
        name: "Booming Voice",
        pos: "a2",
        icon: icons["spell_nature_purge"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by ${[
          30,
          60,
        ]}%.`,
      },
      Cruelty: {
        name: "Cruelty",
        pos: "a3",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Demoralizing Shout": {
        name: "Improved Demoralizing Shout",
        pos: "b1",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the attack power and spell damage reduction of your Demoralizing Shout by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Unbridled Wrath": {
        name: "Unbridled Wrath",
        pos: "b3",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to generate 5 Rage points when you deal melee damage with a weapon.`,
      },
      "Improved Cleave": {
        name: "Improved Cleave",
        pos: "c1",
        icon: icons["ability_warrior_cleave"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the number of targets your Cleave ability hit by ${[
          1,
          2,
        ]}.`,
      },
      "Piercing Howl": {
        name: "Piercing Howl",
        pos: "c2",
        icon: icons["spell_shadow_deathscream"],
        prereq: "Booming Voice",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.`,
      },
      "Blood Craze": {
        name: "Blood Craze",
        pos: "c3",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Regenerates ${[
          3,
          6,
          9,
        ]}% of your total Health over 6 sec after being the victim of a critical strike.`,
      },
      "Improved Battle Shout": {
        name: "Improved Battle Shout",
        pos: "c4",
        icon: icons["ability_warrior_battleshout"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the melee attack power bonus of your Battle Shout by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Precision": {
        name: "Precision",
        pos: "d1",
        icon: icons["Precision"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Execute": {
        name: "Improved Execute",
        pos: "d2",
        icon: icons["inv_sword_48"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Execute ability by ${[
          40,
          80,
        ]}%.`,
      },
      Enrage: {
        name: "Enrage",
        pos: "d3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% melee damage bonus for 30 sec after being the victim of a critical strike. The effect stacks up to 10 times.`,
      },
      "Improved Slam": {
        name: "Improved Slam",
        pos: "d4",
        icon: icons["ability_warrior_decisivestrike"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Decreases the casting time of your Slam ability by ${[
          0.5,
          1,
          1.5,
        ]} sec${["", "", " but Slam now has a cooldown"]}.`,
      },
      "Death Wish": {
        name: "Death Wish",
        pos: "e2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 50%. Lasts 30 sec.`,
      },
      "Improved Intercept": {
        name: "Improved Intercept",
        pos: "e4",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the rage cost of your Intercept and Pummel abilities by ${[
          50,
          100,
        ]}% and reduces the cooldown of your Intercept ability by ${[
          5,
          10,
        ]} sec.`,
      },
      "Inner Rage": {
        name: "Inner Rage",
        pos: "e1",
        icon: icons["inner_rage"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the cooldown of your Bloodrage, Berserker Rage and Recklessness by ${[
          25,
          50,
        ]}%.`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "f1",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 3 swings aftre dealing a melee critical strike.`,
      },
      "Berserker's Blood": {
        name: "Berserker's Blood",
        pos: "f3",
        icon: icons["berserker_blood"],
        maxRank: 5,
        reqPoints: 25,
	prereq: "Enrage",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases your attack speed, chance to resist hostile spells and healing taken by 1% to 30%. At full health the bonus is 1% with a greater effect up to 30% if you are badly hurt. Max bonus health threshold:  ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Bloodthirst": {
        name: "Bloodthirst",
        pos: "g2",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Death Wish",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Instantly attack the target causing damage equal to 50% of your attack power. In addition, your successful melee attacks have a chance to drain 50 life. This effect lasts 3 charges or 15 sec.`,
      },
      "Improved Bloodthirst": {
        name: "Improved Bloodthirst",
        pos: "g3",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 2,
        reqPoints: 30,
        prereq: "Bloodthirst",
        arrows: [{ dir: "right", from: "g2", to: "g3" }],
        description: talentText`Reduces the cost of your Bloodthirst by ${[
          5,
          10,
        ]} Rage.`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["inv_shield_06"],
    talents: {
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "b2",
        icon: icons["inv_shield_06"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and has a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% to restore 1% of your health when a block occurs.`,
      },
      Anticipation: {
        name: "Anticipation",
        pos: "d2",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your Defense skill by ${[
          5,
          10,
          15,
          20,
          25,
        ]}.`,
      },
      "Improved Bloodrage": {
        name: "Improved Bloodrage",
        pos: "a1",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the instant Rage generated by your Bloodrage ability by ${[
          5,
          10,
        ]} and reduces the health cost of your Bloodrage ability by ${[
          25,
          50,
        ]}%.`,
      },
      Toughness: {
        name: "Toughness",
        pos: "a2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your armor value from items by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Iron Will": {
        name: "Iron Will",
        pos: "a3",
        icon: icons["spell_magic_magearmor"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your chance to resist Stun and Charm effects by an additional ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Last Stand": {
        name: "Last Stand",
        pos: "c1",
        icon: icons["spell_holy_ashestoashes"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Improved Bloodrage",
        arrows: [{ dir: "down", from: "a1", to: "c1" }],
        description: talentText`Heals yourself for 30% of your maximum health, and increases your maximum health by 30% for 20 sec.`,
      },
      "Shield Mastery": {
        name: "Shield Mastery",
        pos: "c2",
        icon: icons["ability_defend"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "b2", to: "c2" }],
        description: talentText`Allows your Shield Block and Shield Reflection abilities to block/reflect an additional attack and reduces cooldown by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Improved Revenge": {
        name: "Improved Revenge",
        pos: "b4",
        icon: icons["ability_warrior_revenge"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your Revenge ability a ${[
          15,
          30,
          45,
        ]}% chance to stun the target for 4 sec.`,
      },
      Defiance: {
        name: "Defiance",
        pos: "d3",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the threat generated by your attacks by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% while in Defensive Stance.`,
      },
      "Blademail": {
        name: "Blademail",
        pos: "c3",
        icon: icons["blademail"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`When struck in combat inflicts up to ${[
          6,
          12,
          18,
        ]}(damage scales with your level) physical damage to the attacker.`,
      },
      "Shield Toss": {
        name: "Shield Toss",
        pos: "e1",
        icon: icons["shield_toss"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Hurls a shield at the enemy, causing 90 to 100 damage, increased by Attack Power and knocks down for 4 sec. This ability damage ignores target's armor and causes a high amount of threat.`,
      },
      "Mocker": {
        name: "Mocker",
        pos: "d1",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Improves the chance to hit with Taunt, Challenging Shout and Mocking Blow abilities by ${[
          3,
          6,
        ]}%.`,
      },
      "Improved Shield Wall": {
        name: "Improved Shield Wall",
        pos: "e3",
        icon: icons["ability_warrior_shieldwall"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the effect duration of your Shield Wall ability by ${[
          3,
          5,
        ]} secs and reduces it's cooldown by${[
          25,
          50,
        ]}%.`,
      },
      "Concussion Blow": {
        name: "Concussion Blow",
        pos: "c4",
        icon: icons["ability_thunderbolt"],
        maxRank: 1,
        reqPoints: 10,
	prereq: "Improved Revenge",
        arrows: [{ dir: "down", from: "b4", to: "c4" }],
        description: talentText`Stuns the opponent for 5 sec.`,
      },
      "Improved Shield Bash": {
        name: "Improved Shield Bash",
        pos: "b3",
        icon: icons["ability_warrior_shieldbash"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives your Shield Bash ability a ${[
          50,
          100,
        ]}% chance to silence the target for 6 sec.`,
      },
      "One-Handed Specialization": {
        name: "One-Handed Specialization",
        pos: "d4",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the damage you deal with One-Handed Melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Training and Discipline": {
        name: "Training and Discipline",
        pos: "e2",
        icon: icons["training_discipline"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the cost of all your abilities by ${[
          1,
          2,
          3,
        ]} rage point${["", "s", "s"]}.`,
      },
      "Vitality": {
        name: "Vitality",
        pos: "f1",
        icon: icons["vitality"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases healing taken by 5% and your total stamina by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Butterfly Style": {
        name: "Butterfly Style",
        pos: "f3",
        icon: icons["butterfly_style"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your agility by ${[
          10,
          20,
	  30,
          40,
          50,
        ]}%.`,
      },
      "Prowess": {
        name: "Prowess",
        pos: "g2",
        icon: icons["Prowess"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Training and Discipline",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases your Strength by up to 2% of your current Health. Also, if you have more than 50% of your Health you become immune to Diseases and if more than 90% - to Poisons.`,
      },
    },
  },
};
