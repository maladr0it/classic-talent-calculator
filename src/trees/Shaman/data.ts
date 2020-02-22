import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/shaman"),
);
const icons = requireAll(require.context("../../assets/icons/shaman"));

export const data: TalentData = {
  Elemental: {
    name: "Elemental",
    background: backgrounds["elemental"],
    icon: icons["spell_nature_lightning"],
    talents: {
      Convection: {
        name: "Convection",
        pos: "a2",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Reduces the mana cost of your Shock, Lightening Bolt, and Chain Lightening spells by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      Concussion: {
        name: "Concussion",
        pos: "a3",
        icon: icons["spell_fire_fireball"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Earth's Grasp": {
        name: "Earth's Grasp",
        pos: "b1",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the health of your Stoneclaw Totem by ${[
          150,
          300,
        ]}% and the radius of your Earthbind Totem by ${[2, 4]} yards and the duration of your Earth Shock by ${[0.5, 1]} sec.`,
      },
      "Sandblast": {
        name: "Sandblast",
        pos: "c1",
        icon: icons["sandblast"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Earth's Grasp",
        arrows: [{ dir: "down", from: "b1", to: "c1" }],
        description: talentText`Sends a wave of sand, blinding nearby enemies for 5 sec. Targets must be facing you. Any damage caused will remove the effect..`,
      },
      "Elemental Warding": {
        name: "Elemental Warding",
        pos: "b2",
        icon: icons["spell_nature_spiritarmor"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the damage taken by Fire, Frost and Nature effects by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Call of Flame": {
        name: "Call of Flame",
        pos: "b3",
        icon: icons["spell_fire_immolation"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Fire Totems by ${[
          10,
          20,
          30,
        ]}% and increases the critical strike chance of your Flame Shock by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Elemental Focus": {
        name: "Elemental Focus",
        pos: "b4",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      Reverberation: {
        name: "Reverberation",
        pos: "c2",
        icon: icons["spell_frost_frostward"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`,
      },
      "Call of Thunder": {
        name: "Call of Thunder",
        pos: "c3",
        icon: icons["spell_nature_callstorm"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Fire Totems": {
        name: "Improved Fire Totems",
        pos: "e1",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the delay before your Fire Nova Totem activates by ${[
          1,
          2,
        ]} sec. and decreases the threat generated by your Magma Totem by ${[
          25,
          50,
        ]}%.`,
      },
      "Eye of the Storm": {
        name: "Eye of the Storm",
        pos: "c4",
        icon: icons["spell_nature_eyeofthestorm"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          25,
          50,
          75,
        ]}% to avoid interruption caused by damage while casting Lightning Bolt or Chain Lightning.`,
      },
      "Elemental Devastation": {
        name: "Elemental Devastation",
        pos: "d4",
        icon: icons["classic_spell_fire_elementaldevastation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your offensive spell crits will increase your chance to get a critical strike with all attacks and spells by ${[
          3,
          6,
          9,
        ]}% for 10 sec.`,
      },
      "Storm Reach": {
        name: "Storm Reach",
        pos: "a1",
        icon: icons["spell_nature_stormreach"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the range of your Lightning Bolt and Chain Lightning spells by ${[
          3,
          6,
        ]} yards.`,
      },
      "Elemental Fury": {
        name: "Elemental Fury",
        pos: "d2",
        icon: icons["spell_fire_volcano"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova totems and your Fire, Frost, and Nature spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Lightning Mastery": {
        name: "Lightning Mastery",
        pos: "e3",
        icon: icons["spell_lightning_lightningbolt01"],
        maxRank: 5,
        reqPoints: 20,
        prereq: "Call of Thunder",
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`,
      },
      "Elemental Mastery": {
        name: "Elemental Mastery",
        pos: "e2",
        icon: icons["spell_nature_wispheal"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Elemental Fury",
        arrows: [{ dir: "down", from: "d2", to: "e2" }],
        description: talentText`When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance.`,
      },
      "Elemental Precision": {
        name: "Elemental Precision",
        pos: "f1",
        icon: icons["elemental_precision"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the chance to hit with your Fire, Frost and Nature spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Static Field": {
        name: "Static Field",
        pos: "f3",
        icon: icons["static_field"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives your Lightning Spells a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to energize the air around you, increasing damage and reducing mana cost of your Lightning Bolt and Chain Lightning by 1% for 30 sec. Stacks up to 10 times.`,
      },
      "Earthquake": {
        name: "Earthquake",
        pos: "g2",
        icon: icons["earthquake"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Elemental Mastery",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Shakes the ground, shocking enemies for trivial amount of Nature damage. Each hit causes an echoes that inflicts damage to their nearby allies. The effect lessens with distance to the epicenter. Also dazes the targets for 5 sec and causes a high amount of threat.`,
      },
    },
  },
  Enhancement: {
    name: "Enhancement",
    background: backgrounds["enhancement"],
    icon: icons["spell_nature_lightningshield"],
    talents: {
      "Ancestral Knowledge": {
        name: "Ancestral Knowledge",
        pos: "a2",
        icon: icons["spell_shadow_grimward"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your maximum Mana by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "a3",
        icon: icons["inv_shield_06"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          5,
          10,
        ]}% and has a ${[50, 100]}% to restore 5% of your Mana when a block occurs.`,
      },
      "Rockhide": {
        name: "Rockhide",
        pos: "b1",
        icon: icons["Rockhide"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`When struck in combat has a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to inflict up to 120 Nature damage (scales with your level) to nearby enemies and stun them for 3 sec. In addition reduces all damage taken by ${[1,2,3,4,5]}%.`,
      },
      "Guardian Totems": {
        name: "Guardian Totems",
        pos: "c1",
        icon: icons["spell_nature_stoneskintotem"],
        maxRank: 2,
        reqPoints: 10,
        prereq: "Rockhide",
        arrows: [{ dir: "down", from: "b1", to: "c1" }],
        description: talentText`Increases the effect of your Resistance Totems, Stoneskin Totem and Windwall Totem by ${[
          25,
          50,
        ]}% and reduces the cooldown of your Grounding Totem by ${[10, 20]} sec.`,
      },
      "Rocky Bash": {
        name: "Rocky Bash",
        pos: "c3",
        icon: icons["rocky_bash"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "a3", to: "c3" }],
        description: talentText`Smashes the target and its nearest allies with petrified shield, causing 79-89 damage, increased by Attack Power. Hits up to 3 targets.`,
      },
      "Thundering Strikes": {
        name: "Thundering Strikes",
        pos: "b2",
        icon: icons["ability_thunderbolt"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Improves your chance to get a critical strike with your weapon by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Ghost Wolf": {
        name: "Improved Ghost Wolf",
        pos: "d3",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cast time of your Ghost Wolf spell by ${[
          1,
          2,
        ]} sec.`,
      },
      "Improved Lightning Shield": {
        name: "Improved Lightning Shield",
        pos: "d4",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Lightning Shield orbs by ${[
          5,
          10,
          15,
        ]}% reduces it's mana cost by ${[
          5,
          10,
          15,
        ]}% and increases it's number of orbs by ${[
          3,
          4,
          5,
        ]}.`,
      },
      "Enhancing Totems": {
        name: "Enhancing Totems",
        pos: "d1",
        icon: icons["spell_nature_earthbindtotem"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increase the effect of your Strength of Earth and Grace of Air Totems by ${[
          20,
          40,
        ]}%.`,
      },
      Anticipation: {
        name: "Anticipation",
        pos: "c4",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your stealth detection and reduces the chance you are hit by spells and ranged attacks by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      Flurry: {
        name: "Flurry",
        pos: "c2",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 10,
        prereq: "Thundering Strikes",
        arrows: [{ dir: "down", from: "b2", to: "c2" }],
        description: talentText`Increases your attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 3 swings after dealing a critical strike.`,
      },
      Toughness: {
        name: "Toughness",
        pos: "d2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your armor value from items by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Weapon Totems": {
        name: "Improved Weapon Totems",
        pos: "e1",
        icon: icons["spell_fire_enchantweapon"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the effect of your Windfury Totem and Flametongue Totem by ${[
          20,
          40,
        ]}%.`,
      },
      "Elemental Weapons": {
        name: "Elemental Weapons",
        pos: "a1",
        icon: icons["spell_fire_flametounge"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effectiveness of your elemental weapon enchants by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Weapon Mastery": {
        name: "Weapon Mastery",
        pos: "b4",
        icon: icons["ability_hunter_swiftstrike"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage you deal with all weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      Bloodlust: {
        name: "Bloodlust",
        pos: "e2",
        icon: icons["bloodlust"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases an ally's attack and casting speed by 10% for 3 min.`,
      },
      "Primal Endurance": {
        name: "Primal Endurance",
        pos: "e3",
        icon: icons["primal"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Allows ${[
          10,
          20,
          30,
          40,
          50,
        ]}% of your health regeneration and ${[
          3,
          6,
          9,
          12,
          15,
        ]}% of your mana regeneration to work always. In addition increases healing taken by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Armaments of Storm": {
        name: "Armaments of Storm",
        pos: "f1",
        icon: icons["armaments_storm"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Imbue the weapon with storm, gives you a ${[
          10,
          20,
          30,
          40,
          50,
        ]}% to deal up to 180 additional Nature damage (scales with your level).`,
      },
      "Shamanism": {
        name: "Shamanism",
        pos: "f3",
        icon: icons["armaments_storm"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives your Melee attacks a chance to enter a Shamanic Trance. The Shamanic Trance reduces the cast time and mana cost of your next damage spell by 100%${[
          ".",
          " Effect occurs more often than Shamanism (Rank 1).",
          " Effect occurs more often than Shamanism (Rank 2).",
          " Effect occurs more often than Shamanism (Rank 3).",
          " Effect occurs more often than Shamanism (Rank 4).",
        ]}`,
      },
      Aftershock: {
        name: "Aftershock",
        pos: "g2",
        icon: icons["bloodlust"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Bloodlust",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Blasts a target with an aftershocks, consuming your shock spells and applies an effects based on consumed shock spells. 

        Flame Shock: instantly deals damage equal to 12 sec of Flame Shock.

        Frost Shock: freeze the target for 4 sec. 

        Earth Shock: breaks movement impairing effects for you and forces the target to focus attacks on you for 5 sec.`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_magicimmunity"],
    talents: {
      "Improved Healing Wave": {
        name: "Improved Healing Wave",
        pos: "b1",
        icon: icons["spell_nature_magicimmunity"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Healing Wave spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Spiritwalking": {
        name: "Spiritwalking",
        pos: "a1",
        icon: icons["Spiritwalking"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces the chance you are hit by melee attacks by ${[
          5,
          10,
        ]}%. In addition reduces the cooldown of your Astrall Recall and Reincarnation by ${[
          15,
          30,
        ]} min and increases the amount of health and mana you reincarnate with by an additional ${[
          15,
          30,
        ]}%.`,
      },
      "Tidal Focus": {
        name: "Tidal Focus",
        pos: "c1",
        icon: icons["spell_frost_manarecharge"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the Mana cost of your healing spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Ancestral Healing": {
        name: "Ancestral Healing",
        pos: "d1",
        icon: icons["spell_nature_undyingstrength"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases your target's armor value by ${[
          8,
          16,
          25,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Totemic Focus": {
        name: "Totemic Focus",
        pos: "b3",
        icon: icons["spell_nature_moonglow"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the Mana cost of your totems by ${[
          25,
          50,
        ]}%.`,
      },
      "Nature's Guidance": {
        name: "Nature's Guidance",
        pos: "a3",
        icon: icons["spell_frost_stun"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with melee attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Nature Focus": {
        name: "Nature Focus",
        pos: "c4",
        icon: icons["spell_nature_healingwavelesser"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while casting any healing spell and${[
          6,
          12,
          18,
          24,
          30,
        ]}% while casting any lightning spell.`,
      },
      "Totemic Mastery": {
        name: "Totemic Mastery",
        pos: "c3",
        icon: icons["spell_nature_nullward"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`The duration and radius of your totems that affect friendly targets is increased by ${[
          25,
          50,
        ]}%.`,
      },
      "Nature Grace": {
        name: "Nature Grace",
        pos: "b4",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the threat you generate by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Nature Guardian": {
        name: "Nature Guardian",
        pos: "d2",
        icon: icons["nature_guardian"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the chance you are critically hit by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Restorative Totems": {
        name: "Restorative Totems",
        pos: "d3",
        icon: icons["spell_nature_manaregentotem"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the effect of your Mana Spring and Healing Stream totems by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Tidal Mastery": {
        name: "Tidal Mastery",
        pos: "a2",
        icon: icons["spell_nature_tranquility"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the critical effect chance of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and increases the speed reduction of your Frost Shock by an additional ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Tidal Shield": {
        name: "Tidal Shield",
        pos: "c2",
        icon: icons["tidal_shield"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Tidal Mastery",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Reduces the damage taken from physical attacks by 75% for 12 sec. In addition, protects the caster from spells, but increases the time between attacks by 100%.`,
      },
      "Healing Way": {
        name: "Healing Way",
        pos: "e1",
        icon: icons["classic_spell_nature_healingway"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Healing Wave spells have ${[
          33,
          66,
          100,
        ]}% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.`,
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e3",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.`,
      },
      Purification: {
        name: "Purification",
        pos: "e2",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases the effectiveness of your healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases damage dealt to undead or demons by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Focused Mind": {
        name: "Focused Mind",
        pos: "e4",
        icon: icons["focusmind"],
        maxRank: 5,
        reqPoints: 20,
        prereq: "Nature Focus",
        arrows: [{ dir: "down", from: "c4", to: "e4" }],
        description: talentText`Increases your chance to resist Silence and Interrupt effects by an additional ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Nature Spirit": {
        name: "Focused Mind",
        pos: "f1",
        icon: icons["naturespirit"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases spell damage and healing by up to ${[
          5,
          10,
          15,
          20,
          25,
        ]}% of your total spirit.`,
      },
      "Meditation": {
        name: "Meditation",
        pos: "f3",
        icon: icons["Meditation"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Allows ${[
          6,
          12,
          18,
          24,
          30,
        ]}% of your Mana regenaration to continue while casting.`,
      },
      "Cleansing Wave": {
        name: "Cleansing Wave",
        pos: "g2",
        icon: icons["cleansingwave"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Purification",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Attempts to cure 1 poison effect, 1 disease effect, and 1 magic effect on the target, and additional 1 poison effect, 1 disease effect, and 1 magic effect every 1 seconds for 3 sec.`,
      },
    },
  },
};
