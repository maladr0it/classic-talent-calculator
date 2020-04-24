import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/mage"),
);
const icons = requireAll(require.context("../../assets/icons/mage"));

export const data: TalentData = {
  Arcane: {
    name: "Arcane",
    background: backgrounds["arcane"],
    icon: icons["spell_holy_magicalsentry"],
    talents: {
      "Arcane Subtlety": {
        name: "Arcane Subtlety",
        pos: "c1",
        icon: icons["spell_holy_dispelmagic"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces your target's resistance to all your spells by ${[
          5,
          10,
        ]} and reduces the threat caused by your Arcane spells by ${[
          20,
          40,
        ]}%.`,
      },
      "Arcane Focus": {
        name: "Arcane Focus",
        pos: "a2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the chance that the opponent can resist your Arcane spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to avoid interruption caused by damage while channeling Arcane Missiles.`,
      },
      "Elemental Precision": {
        name: "Elemental Precision",
        pos: "a3",
        icon: icons["spell_ice_magicdamage"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Reduces the chance that the opponent can resist your Frost and Fire spells by ${[
          2,
          4,
          6,
        ]}%`,
      },
      "Wand Specialization": {
        name: "Wand Specialization",
        pos: "a1",
        icon: icons["inv_wand_01"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases your damage with Wands by ${[
          25,
          50,
        ]}%.`,
      },
      "Magic Absorption": {
        name: "Magic Absorption",
        pos: "b2",
        icon: icons["spell_nature_astralrecalgroup"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases all resistances by ${[
          5,
          10,
          15,
          20,
          25,
        ]} and causes all spells you fully resist to restore ${[
          1,
          2,
          3,
          4,
          5,
        ]}% of your total Mana. 1 sec. cooldown.`,
      },
      "Arcane Concentration": {
        name: "Arcane Concentration",
        pos: "c2",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      "Practical Defensive Magic": {
        name: "Practical Defensive Magic",
        pos: "b1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the effect of your Amplify Magic and Dampen Magic spells by ${[
          25,
          50,
        ]}%, decreases the mana lost per point of damage taken when Mana Shield is active by ${[
          25,
          50,
        ]}% and gives your Polymorph a ${[
          45,
          90,
        ]}% chance to not lose casting time when you take damage.`,
      },
      "Spell Twisting": {
        name: "Spell Twisting",
        pos: "c3",
        icon: icons["spell_twisting"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Master of Elements",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Your Fire damage spells increases your chance to get a critical strike chance with your next Frost damage spell by 20%. \n\nYour Frost damage spells increases your chance to get a critical strike chance with your next Fire damage spell by 20%. \n\nYour Arcane damage spells increases your chance to get a critical strike chance with your next  Fire or Frost damage spell by 20%.`,
      },
      "Arcane Resilience": {
        name: "Arcane Resilience",
        pos: "a4",
        icon: icons["spell_arcane_arcaneresilience"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your armor by an amount equal to ${[
          50,
          100,
          150,
        ]}% of your Intellect and increases the effects of your Mage Armor by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Master of Elements": {
        name: "Master of Elements",
        pos: "b3",
        icon: icons["spell_fire_masterofelements"],
        maxRank: 3,
        reqPoints: 5,
        prereq: "Elemental Precision",
        arrows: [{ dir: "down", from: "a3", to: "b3" }],
        description: talentText`Your Fire and Frost spell criticals will refund ${[
          10,
          20,
          30,
        ]}% of their base mana cost.`,
      },
      "Practical Offensive Magic": {
        name: "Practical Offensive Magic",
        pos: "d1",
        icon: icons["practical_offensive_magic"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Counterspell a ${[
          50,
          100,
        ]}% chance to silence the target for 4 sec, reduces the cooldown of your Blink by 5 secs and increases the radius of your Arcane Explosion by ${[
          1,
          2,
        ]} yards.`,
      },
      "Arcane Meditation": {
        name: "Arcane Meditation",
        pos: "d3",
        icon: icons["spell_shadow_siphonmana"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Allows ${[
          5,
          10,
          15,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Presence of Mind": {
        name: "Presence of Mind",
        pos: "e2",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.`,
      },
      "Mind Mastery": {
        name: "Mind Mastery",
        pos: "f3",
        icon: icons["mind_mastery"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases spell damage by up to ${[
          5,
          10,
          15,
          20,
          25,
        ]}% of your total Intellect and increases the effect of your Arcane Intellect by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },

      "Arcane Mind": {
        name: "Arcane Mind",
        pos: "e4",
        icon: icons["spell_shadow_charm"],
        maxRank: 5,
        reqPoints: 20,
        prereq: "Arcane Meditation",
        arrows: [
          { dir: "right-down", from: "d3", to: "d4" },
          { dir: "right-down-down", from: "d4", to: "e4" },
        ],
        description: talentText`Increases your total Intellect by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Arcane Instability": {
        name: "Arcane Instability",
        pos: "d2",
        icon: icons["spell_shadow_teleport"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your spell damage and critical strike chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Arcane Power": {
        name: "Arcane Power",
        pos: "e2",
        icon: icons["spell_nature_lightning"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Arcane Instability",
        arrows: [{ dir: "down", from: "d2", to: "e2" }],
        description: talentText`When activated, your spells deal 35% more damage while costing 35% more mana to cast. This effect lasts 15 sec.`,
      },
      "Improved Arcane Power": {
        name: "Arcane Power",
        pos: "f2",
        icon: icons["improved_arcane_power"],
        maxRank: 2,
        reqPoints: 25,
        prereq: "Arcane Power",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Reduces the cooldown of your Arcane Power by ${[
          1,
          2,
        ]} min and increases duration by ${[
          3,
          6,
        ]} secs.`,
      },
      "Time Pressure": {
        name: "Time Pressure",
        pos: "f1",
        icon: icons["time_pressure"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases casting speed by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Brilliance Aura": {
        name: "Brilliance Aura",
        pos: "g2",
        icon: icons["brilliance_aura"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Generates 3% of total Mana every 10 sec to all party members within 30 yards.`,
      },
      "Arcane Wrath": {
        name: "Arcane Wrath",
        pos: "e3",
        icon: icons["arcane_wrath"],
        maxRank: 2,
        reqPoints: 20,
        prereq: "Arcane Power",
        arrows: [{ dir: "right", from: "e2", to: "e3" }],
        description: talentText`Increases the critical strike damage bonus of your Arcane spells by ${[
          50,
          100,
        ]}%.`,
      },

    },
  },
  Fire: {
    name: "Fire",
    background: backgrounds["fire"],
    icon: icons["spell_fire_firebolt02"],
    talents: {
      "Improved Fireball": {
        name: "Improved Fireball",
        pos: "a2",
        icon: icons["spell_fire_firebolt02"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Fireball spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      Impact: {
        name: "Impact",
        pos: "b3",
        icon: icons["spell_fire_meteorstorm"],
        maxRank: 5,
        reqPoints: 5,
        prereq: "Improved Fire Blast",
        arrows: [{ dir: "down", from: "a3", to: "b3" }],
        description: talentText`Gives your Fire spells a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to stun the target for 2 sec.`,
      },
      Ignite: {
        name: "Ignite",
        pos: "f1",
        icon: icons["spell_fire_incinerate"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your critical strikes from Fire damage spells cause the target to burn for an additional ${[
          8,
          16,
          24,
          32,
          40,
        ]}% of your spell's damage over 4 sec.`,
      },
      "Flame Throwing": {
        name: "Flame Throwing",
        pos: "b1",
        icon: icons["spell_fire_flare"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Fire spells by ${[
          3,
          6,
        ]} yards.`,
      },
      "Improved Fire Blast": {
        name: "Improved Fire Blast",
        pos: "a3",
        icon: icons["spell_fire_fireball"],
        maxRank: 4,
        reqPoints: 0,
        description: talentText`Reduces the cooldown of your Fire Blast spell by ${[
          2.5,
          5,
          7.5,
          10,
        ]} sec.`,
      },
      Incinerate: {
        name: "Incinerate",
        pos: "c4",
        icon: icons["spell_fire_flameshock"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Fire Blast, Scorch, Flamestrike and Blast Wave spells by ${[
          3,
          6,
          9,
        ]}%.`,
      },
      Pyroblast: {
        name: "Pyroblast",
        pos: "a4",
        icon: icons["spell_fire_fireball02"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Improved Fire Blast",
        arrows: [{ dir: "right", from: "a3", to: "a4" }],
        description: talentText`Hurls an immense fiery boulder that causes 141 to 188 Fire damage and an additional 56 Fire damage over 12 sec.`,
      },
      "Burning Soul": {
        name: "Burning Soul",
        pos: "b2",
        icon: icons["spell_fire_fire"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your Fire spells a ${[
          25,
          50,
          70,
        ]}% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Improved Scorch": {
        name: "Improved Scorch",
        pos: "e4",
        icon: icons["spell_fire_soulburn"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Scorch spells have a ${[
          33,
          66,
          100,
        ]}% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases Fire damage dealt to your target by 3% and lasts 30 sec. Stacks up to 5 times.`,
      },
      "Improved Fire Ward": {
        name: "Improved Fire Ward",
        pos: "a1",
        icon: icons["spell_fire_firearmor"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases your Fire Resistance by ${[
          10,
          20,
        ]}. In addition, causes your Fire Ward to have a ${[
          15,
          30,
        ]}% chance to reflect Fire spells when active.`,
      },
      "Critical Mass": {
        name: "Critical Mass",
        pos: "c1",
        icon: icons["spell_nature_wispheal"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Fire spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Blast Wave": {
        name: "Blast Wave",
        pos: "c2",
        icon: icons["spell_holy_excorcism_02"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 187 Fire damage, and dazing them for 6 sec.`,
      },
      "Blazing Speed": {
        name: "Blazing Speed",
        pos: "d2",
        icon: icons["blazing_speed"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases movement and mounted movement speed by ${[
          5,
          10,
        ]}%. This does not stack with other movement speed increasing effects. \nIn addition, gives you a ${[
          5,
          10,
        ]}% chance when hit by a melee or ranged attack to increase your movement and casting speed by 50% for 10 sec and dispel all movement impairing effects.`,
      },
      "Hot Streak": {
        name: "Hot Streak",
        pos: "d4",
        icon: icons["hot_streak"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Your Fire spell crits gives you a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance your next Pyroblast or Scorch spell cast within 5 sec will be instant cast and cost no mana.`,
      },
      "Thermal Expansion": {
        name: "Thermal Expansion",
        pos: "e3",
        icon: icons["thermal_expansion"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Blast Wave",
        arrows: [{ dir: "right-down", from: "c2", to: "c3" }, { dir: "right-down-down", from: "c3", to: "e3" }],
        description: talentText`Generates mana equal to your level every 5 sec.`,
      },
      "Overheat": {
        name: "Overheat",
        pos: "e2",
        icon: icons["overheat"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the critical strike chance of your Fire spells by ${[
          2,
          4,
          6,
        ]}%, but your Fire spells have a ${[
          3,
          2,
          1,
        ]}% chance to stun you for 2 sec.`,
      },
      "Chain Reaction": {
        name: "Chain Reaction",
        pos: "e1",
        icon: icons["chain_reaction"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Critical Mass",
        arrows: [{ dir: "down", from: "c1", to: "e1" }],
        description: talentText`While active, extra Fireball hits your target's nearest ally. Maintaining reaction may harm your body and soul.`,
      },
      "Pyromania": {
        name: "Pyromania",
        pos: "f4",
        icon: icons["pyromania"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`Reduces the casting time of your Fireball and Pyroblast spells by ${[
          10,
          20,
        ]}%, and your Flamestrike spell by ${[
          50,
          100,
        ]}%. In addition, reduces the cooldown of your Blast Wave Spell by 15 sec.`,
      },

      "Fire Power": {
        name: "Fire Power",
        pos: "f3",
        icon: icons["spell_fire_immolation"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Fire spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      Combustion: {
        name: "Combustion",
        pos: "g2",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Overheat",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 5 critical strikes with Fire spells.`,
      },
    },
  },
  Frost: {
    name: "Frost",
    background: backgrounds["frost"],
    icon: icons["spell_frost_frostbolt02"],
    talents: {
      "Frost Warding": {
        name: "Frost Warding",
        pos: "a1",
        icon: icons["spell_frost_frostward"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the armor and resistances given by your Frost Armor and Ice Armor spells by ${[
          15,
          30,
        ]}%. In addition, gives your Frost Ward a ${[
          15,
          30,
        ]}% chance to reflect Frost spells and effects while active.`,
      },
      "Improved Frostbolt": {
        name: "Improved Frostbolt",
        pos: "a2",
        icon: icons["spell_frost_frostbolt02"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Frostbolt spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Ice Shards": {
        name: "Ice Shards",
        pos: "e3",
        icon: icons["spell_frost_iceshard"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases the critical strike damage bonus of your Frost spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Cryo Core": {
        name: "Cryo Core",
        pos: "b1",
        icon: icons["cryo_core"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces all spell damage taken by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%, but increases physical damage taken by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      Frostbite: {
        name: "Frostbite",
        pos: "b2",
        icon: icons["spell_frost_frostarmor"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your Chill effects a ${[
          5,
          10,
          15,
        ]}% chance to freeze the target for 5 sec.`,
      },
      "Improved Frost Nova": {
        name: "Improved Frost Nova",
        pos: "b3",
        icon: icons["spell_frost_freezingbreath"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Frost Nova spell by ${[
          5,
          10,
        ]} sec.`,
      },
      Permafrost: {
        name: "Permafrost",
        pos: "a3",
        icon: icons["spell_frost_wisp"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the duration of your Chill effects by ${[
          1,
          2,
          3,
        ]} sec and reduces the target's speed by an additional ${[4, 7, 10]}%.`,
      },
      "Piercing Ice": {
        name: "Piercing Ice",
        pos: "c1",
        icon: icons["spell_frost_frostbolt"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Frost spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Cold Snap": {
        name: "Cold Snap",
        pos: "e2",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`When activated, this spell finishes the cooldown on all your Frost spells.`,
      },
      "Improved Blizzard": {
        name: "Improved Blizzard",
        pos: "c4",
        icon: icons["spell_frost_icestorm"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by ${[
          25,
          50,
          75,
        ]}%. Lasts ${[
          1.5,
          3,
          5,
        ]} sec.`,
      },
      "Arctic Reach": {
        name: "Arctic Reach",
        pos: "c2",
        icon: icons["spell_shadow_darkritual"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Frost Channeling": {
        name: "Frost Channeling",
        pos: "d2",
        icon: icons["spell_frost_stun"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the mana cost of your Frost spells by ${[
          5,
          10,
          15,
        ]}% and reduces the threat caused by your Frost spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      Shatter: {
        name: "Shatter",
        pos: "d3",
        icon: icons["spell_frost_frostshock"],
        maxRank: 3,
        reqPoints: 15,
        prereq: "Improved Frost Nova",
        arrows: [{ dir: "down", from: "b3", to: "d3" }],
        description: talentText`Increases the critical strike chance of all your spells against frozen targets by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Ice Block": {
        name: "Ice Block",
        pos: "c1",
        icon: icons["spell_frost_frost"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Cryo Core",
        arrows: [{ dir: "down", from: "b1", to: "c1" }],
        description: talentText`You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot, move or cast spells.`,
      },
      "Ice Mirror": {
        name: "Ice Mirror",
        pos: "e1",
        icon: icons["ice_mirror"],
        maxRank: 3,
        reqPoints: 20,
        prereq: "Ice Block",
        arrows: [{ dir: "down", from: "c1", to: "e1" }],
        description: talentText`Gives you a ${[
          3,
          6,
          9,
        ]}% chance to reflect hostile spells back at their caster. This effect can only occur once every 30sec.`,
      },
      "Coldbringer": {
        name: "Coldbringer",
        pos: "f1",
        icon: icons["coldbringer"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the critical strike chance of your Frost spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and the chance you are hit by melee and ranged attacks reduced by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Cone of Cold": {
        name: "Improved Cone of Cold",
        pos: "d4",
        icon: icons["spell_frost_glacier"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage dealt by your Cone of Cold spell by ${[
          15,
          25,
          35,
        ]}% and reduces its cooldown by ${[
          5,
          10,
          15,
        ]} sec.`,
      },
      "Winter's Chill": {
        name: "Winter's Chill",
        pos: "f3",
        icon: icons["spell_frost_chillingblast"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives your Frost damage spells a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.`,
      },
      "Ice Barrier": {
        name: "Ice Barrier",
        pos: "g2",
        icon: icons["spell_ice_lament"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Cold Snap",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Instantly sheilds you, absorbing 455 damage. Lasts 1 min. While the shield holds, spells will not be interrupted.`,
      },
      "Improved Ice Shields": {
        name: "Improved Ice Shields",
        pos: "g3",
        icon: icons["improved_ice_shields"],
        maxRank: 2,
        reqPoints: 30,
        prereq: "Ice Barrier",
        arrows: [{ dir: "right", from: "g2", to: "g3" }],
        description: talentText`Reduces the cooldown of your Ice Barrier and Ice Block by ${[
          25,
          50,
        ]}%, reduces their Mana cost by ${[
          10,
          20,
        ]}% and reduces the chance your Ice Barrier will be dispelled by ${[
          20,
          40,
        ]}%.`,
      },
    },
  },
};
