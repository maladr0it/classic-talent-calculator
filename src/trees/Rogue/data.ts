import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/rogue"),
);
const icons = requireAll(require.context("../../assets/icons/rogue"));

export const data: TalentData = {
  Assassination: {
    name: "Assassination",
    background: backgrounds["assassination"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Improved Eviscerate": {
        name: "Improved Eviscerate",
        pos: "a1",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the damage done by your Eviscerate ability by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Remorseless Attacks": {
        name: "Remorseless Attacks",
        pos: "a2",
        icon: icons["ability_rogue_feigndeath"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`After killing a target that yields experience or honor, gives you a ${[
          20,
          40,
        ]}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 30 sec.`,
      },
      Malice: {
        name: "Malice",
        pos: "a3",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your critical strike chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      Ruthlessness: {
        name: "Ruthlessness",
        pos: "b1",
        icon: icons["ability_druid_disembowel"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your finishing moves a ${[
          30,
          60,
          90,
        ]}% chance to add a combo point to your target.`,
      },
      "Seek and Destroy": {
        name: "Seek and Destroy",
        pos: "b2",
        icon: icons["born_adventurer"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Your Detection ability now shows the location of all nearby humanoids on the minimap.\nAlso increases movement and mounted movement speed by ${[
          5,
          10,
        ]}%. This does not stack with other movement speed increasing effects.`,
      },
      "Exhaustion": {
        name: "Exhaustion",
        pos: "b4",
        icon: icons["Exhaustion"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the duration of your Slice and Dice, Rupture and Expose Armor abilities by ${[
          25,
          50,
        ]}%. In addition, increases the armor reduced by your Expose Armor ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Relentless Strikes": {
        name: "Relentless Strikes",
        pos: "c1",
        icon: icons["ability_warrior_decisivestrike"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Your finishing moves have a 20% chance per combo point to restore 25 energy.`,
      },
      Lethality: {
        name: "Lethality",
        pos: "c3",
        icon: icons["ability_criticalstrike"],
        maxRank: 5,
        reqPoints: 10,
        prereq: "Malice",
        arrows: [{ dir: "down", from: "a3", to: "c3" }],
        description: talentText`Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Vile Poisons": {
        name: "Vile Poisons",
        pos: "d1",
        icon: icons["ability_rogue_feigndeath"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the damage dealt by your poisons by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and gives your poisons an additional ${[
          10,
          20,
          30,
          40,
          50,
        ]}% chance to resist dispel effects.`,
      },
      "Improved Poisons": {
        name: "Improved Poisons",
        pos: "c4",
        icon: icons["ability_poisons"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the chance to apply poisons to your target by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Death Mark": {
        name: "Death Mark",
        pos: "d2",
        icon: icons["death_mark"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Seek and Destroy",
        arrows: [{ dir: "down", from: "b2", to: "d2" }],
        description: talentText`Your Ambush, Garrote and Cheap Shot applies Death Mark effect to the target. Marked enemy can always be seen by the rogue whether it stealths or turns invisible, the target also appears on the mini-map and cannot move faster than his normal movement speed.
        This effect lasts ${[
          10,
          20,
        ]} sec and can only occur once every 60 sec.`,
      },
      "Bloodthirsty": {
        name: "Bloodthirsty",
        pos: "d3",
        icon: icons["Bloodthirsty"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Increases the damage dealt by your Garrote and Rupture abilities by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Vitality": {
        name: "Vitality",
        pos: "d4",
        icon: icons["Vitality"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Allows ${[
          10,
          20,
        ]}% of your Health regeneration to work while in combat. In addition, healing taken increased by ${[
          10,
          20,
        ]}%.`,
      },
      "Cold Blood": {
        name: "Cold Blood",
        pos: "e2",
        icon: icons["spell_ice_lament"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%.`,
      },
      "Improved Kidney Shot": {
        name: "Improved Kidney Shot",
        pos: "e3",
        icon: icons["ability_rogue_kidneyshot"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`While affected by your Kidney Shot ability, the target receives an additional ${[
          3,
          6,
          9,
        ]}% damage from all sources. In addition, decreases the cooldown of your Kidney Shot ability by ${[
          5,
          10,
          15,
        ]} sec.`,
      },
      "Total Control": {
        name: "Total Control",
        pos: "e4",
        icon: icons["total_control"],
        maxRank: 2,
        reqPoints: 20,
        prereq: "Improved Kidney Shot",
        arrows: [{ dir: "right", from: "e3", to: "e4" }],
        description: talentText`Increases the duration of your crowd control effects by ${[
          0.5,
          1,
        ]} sec.`,
      },
      "Cold Blooded": {
        name: "Cold Blooded",
        pos: "f2",
        icon: icons["spell_ice_lament"],
        maxRank: 2,
        reqPoints: 20,
        prereq: "Cold Blood",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases the critical strike chance of your Sinister Strike, Gouge, Backstab, Ambush, Ghostly Strike, Hemorrhage or Eviscerate abilities by ${[
          5,
          10,
        ]}%.`,
      },
      "Seal Fate": {
        name: "Seal Fate",
        pos: "f1",
        icon: icons["spell_shadow_chilltouch"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your critical strikes from abilities that add combo points have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to add an additional combo point.`,
      },
      "Gaining an Advantange": {
        name: "Gaining an Advantange",
        pos: "f3",
        icon: icons["gain_advantage"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your attacks have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to reduce the target's Stats by 1% and increase your Agility by 1%. Lasts 15 sec, stacks up to 30 times.`,
      },

      Vigor: {
        name: "Vigor",
        pos: "g2",
        icon: icons["spell_nature_earthbindtotem"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Increases your maximum Energy by 10 and increases your Energy regeneration by 5 per tick.`,
      },
    },
  },
  Combat: {
    name: "Combat",
    background: backgrounds["combat"],
    icon: icons["ability_backstab"],
    talents: {
      "Improved Gouge": {
        name: "Improved Gouge",
        pos: "a1",
        icon: icons["ability_gouge"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effect duration of your Gouge ability by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Improved Sinister Strike": {
        name: "Improved Sinister Strike",
        pos: "a2",
        icon: icons["spell_shadow_ritualofsacrifice"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces the Energy cost of your Sinister Strike ability by ${[
          3,
          5,
        ]}.`,
      },
      "Bitter Experience": {
        name: "Bitter Experience",
        pos: "a3",
        icon: icons["bitter_experience"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your Dodge chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and all resistances by ${[
          8,
          16,
          24,
          32,
          40,
        ]}%.`,
      },
      "Improved Backstab": {
        name: "Improved Backstab",
        pos: "b1",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the critical strike chance of your Backstab ability by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      Deflection: {
        name: "Deflection",
        pos: "b2",
        icon: icons["ability_parry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your Parry chance by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      Precision: {
        name: "Precision",
        pos: "b3",
        icon: icons["ability_marksmanship"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      Riposte: {
        name: "Riposte",
        pos: "c2",
        icon: icons["ability_warrior_challange"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Deflection",
        arrows: [{ dir: "down", from: "b2", to: "c2" }],
        description: talentText`A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec.`,
      },
      "Improved Sprint": {
        name: "Improved Sprint",
        pos: "b4",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives a ${[
          50,
          100,
        ]}% chance to remove all movement impairing effects when you activate your Sprint ability and increases it's duration by ${[
          3,
          6,
        ]} sec.`,
      },
      "Improved Kick": {
        name: "Improved Kick",
        pos: "c1",
        icon: icons["ability_kick"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives your Kick ability a ${[
          50,
          100,
        ]}% chance to silence the target for 3 sec.`,
      },
      "Close Quarters Combat": {
        name: "Close Quarters Combat",
        pos: "c4",
        icon: icons["inv_weapon_shortblade_05"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your chance to get a critical strike with Fist and Daggers by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization",
        pos: "c3",
        icon: icons["ability_dualwield"],
        maxRank: 5,
        reqPoints: 10,
        prereq: "Precision",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases damage done by your offhand weapon by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Physical Prowess": {
        name: "Physical Prowess",
        pos: "d1",
        icon: icons["physical_prowess"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Sprint and Evasion abilities by ${[
          1,
          2,
        ]} min and increases your Strength by 25% and Stamina by 5%.`,
      },
      "Mace Specialization": {
        name: "Mace Specialization",
        pos: "d2",
        icon: icons["inv_mace_01"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Causes your attacks with maces to ignore up to ${[
          120,
          240,
          360,
          480,
          600,
        ]}(scales with your level) of your target's Armor.`,
      },
      "Blade Flurry": {
        name: "Blade Flurry",
        pos: "e2",
        icon: icons["ability_warrior_punishingblow"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Your next 15 attacks strike an additional nearby opponent. Lasts 20 sec.`,
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
      "Steadfast Determination": {
        name: "Steadfast Determination",
        pos: "e3",
        icon: icons["steadfast"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases your chance to resist Stun, Fear and Charm effects by an additional ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Battle Rush": {
        name: "Battle Rush",
        pos: "f1",
        icon: icons["battle_rush"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your auto attacks have a ${[
          10,
          20,
          30,
          40,
          50,
        ]}% chance to regain 5 energy.`,
      },
      "Weapon Expertise": {
        name: "Weapon Expertise",
        pos: "f2",
        icon: icons["spell_holy_blessingofstrength"],
        maxRank: 2,
        reqPoints: 25,
        prereq: "Blade Flurry",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases your chance to parry and your attack speed by ${[
          3,
          5,
        ]}%.`,
      },
      Aggression: {
        name: "Aggression",
        pos: "f3",
        icon: icons["ability_racial_avatar"],
        maxRank: 3,
        reqPoints: 25,
        description: talentText`Increases the damage of your Sinister Strike, Hemorrhage and Eviscerate abilities by ${[
          3,
          6,
          9,
        ]}%.`,
      },
      "Adrenaline Rush": {
        name: "Adrenaline Rush",
        pos: "g2",
        icon: icons["spell_shadow_shadowworddominate"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`You're feeling the adrenaline, becoming immune to Fear and Incapacitate effects and increases your Energy regeneration rate by 100%. Lasts 20 sec.`,
      },
    },
  },
  Subtlety: {
    name: "Subtlety",
    background: backgrounds["subtlety"],
    icon: icons["ability_stealth"],
    talents: {
      "Master of Deception": {
        name: "Master of Deception",
        pos: "a2",
        icon: icons["spell_shadow_charm"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces the chance enemies have to detect you while in Stealth mode.${[
          "",
          " More effective than Master of Deception (Rank 1)",
        ]}.`,
      },
      Opportunity: {
        name: "Opportunity",
        pos: "a3",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Sleight of Hand": {
        name: "Sleight of Hand",
        pos: "b2",
        icon: icons["ability_rogue_feint"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the chance you are critically hit by melee and ranged attacks by ${[
          2,
          4,
        ]}% and increases the threat reduction of your Feint ability by ${[
          50,
          100,
        ]}%.`,
      },
      "Thug Life": {
        name: "Thug Life",
        pos: "b4",
        icon: icons["thug_life"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the Energy cost of your Pickpocket, Distract and Disarm Trap by ${[
          "50",
          "100",
        ]}% and increases the radius of your Distract by ${[
          "3",
          "6",
        ]} yds.
        Also reputation gains increased by ${[
          "5",
          "10",
        ]}%.`,
      },

      Elusiveness: {
        name: "Elusiveness",
        pos: "d2",
        icon: icons["spell_magic_lesserinvisibilty"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Evasion, Vanish, Blind and Cloak of Shadows abilities by ${[
          "1",
          "2 min",
        ]}.`,
      },
      Camouflage: {
        name: "Camouflage",
        pos: "d3",
        icon: icons["ability_stealth"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your speed while stealthed by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and reduces the cooldown of your Stealth ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`,
      },
      Initiative: {
        name: "Initiative",
        pos: "b1",
        icon: icons["spell_shadow_fumble"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          30,
          70,
          100,
        ]}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.`,
      },
      "Ghostly Strike": {
        name: "Ghostly Strike",
        pos: "c2",
        icon: icons["spell_shadow_curse"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`A strike that deals 150% weapon damage and increases your chance to dodge by 15% for 5 sec. Awards 1 combo point.`,
      },
      "Improved Ambush": {
        name: "Improved Ambush",
        pos: "c3",
        icon: icons["ability_rogue_ambush"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Opportunity",
        arrows: [{ dir: "down", from: "a3", to: "c3" }],
        description: talentText`Increases the critical strike chance of your Ambush ability by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      Setup: {
        name: "Setup",
        pos: "c1",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          30,
          70,
          100,
        ]}% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.`,
      },
      "Improved Sap": {
        name: "Improved Sap",
        pos: "a1",
        icon: icons["ability_sap"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          30,
          60,
          90,
        ]}% chance to return to stealth mode after using your Sap ability. In addition, reduces the Energy cost of your Sap ability by ${[
          10,
          20,
          30,
        ]}.`,
      },
      "Serrated Blades": {
        name: "Serrated Blades",
        pos: "d4",
        icon: icons["inv_sword_17"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Causes your attacks to ignore up to 180 of your target's Armor and increases the damage dealt by your Rupture ability by ${[
          5,
          10,
          15,
        ]}%. The amount of Armor reduced increases with your level.`,
      },
      "Heightened Senses": {
        name: "Heightened Senses",
        pos: "d1",
        icon: icons["ability_ambush"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by ${[
          5,
          10,
        ]}.${["", " More effective than Heightened Senses (Rank 1)."]}`,
      },
      "Cloak of Shadows": {
        name: "Cloak of Shadows",
        pos: "e2",
        icon: icons["cloak_shadows"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Protects the rogue from all spells for 5 sec. Does not remove existing harmful spell effects.`,
      },
      Preparation: {
        name: "Preparation",
        pos: "g3",
        icon: icons["spell_shadow_antishadow"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`When activated, this ability immediately finishes the cooldown on your other Rogue abilities.`,
      },
      "Dirty Deeds": {
        name: "Dirty Deeds",
        pos: "e3",
        icon: icons["spell_shadow_summonsuccubus"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the Energy cost of your Cheap Shot and Garrote abilities by ${[
          10,
          20,
        ]}.`,
      },
      Hemmorhage: {
        name: "Hemmorhage",
        pos: "e4",
        icon: icons["spell_shadow_lifedrain"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Serrated Blades",
        arrows: [{ dir: "down", from: "d4", to: "e4" }],
        description: talentText`An instant strike that damages the opponent and causes the target to hemmorhage, increasing any Physical damage dealt to the target by up to 5. Lasts 30 charges or 15 sec. Awards 1 combo point.`,
      },
      Deadliness: {
        name: "Deadliness",
        pos: "f3",
        icon: icons["inv_weapon_crossbow_11"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your Attack Power by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "The Moral Thief": {
        name: "The Moral Thief",
        pos: "f1",
        icon: icons["moral_thief"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`Your auto attacks drains ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2,
        ]} per level amount of Mana from a target. For each mana drained in this way, the target takes 0.2 Shadow damage.`,
      },
      "Enveloping Shadows": {
        name: "Enveloping Shadows",
        pos: "g2",
        icon: icons["enveloping_shadows"],
        maxRank: 3,
        reqPoints: 30,
        prereq: "Cloak of Shadows",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases your chance to avoid area of effect spells by an additional  ${[
          10,
          20,
          30,
        ]}%.`,
      },
    },
  },
};
