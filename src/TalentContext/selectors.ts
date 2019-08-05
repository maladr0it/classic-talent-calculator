import { State, TalentData } from "./types";
import { config } from "../config";

// TODO: optimise this for clarity and speed

// points spent in each tree
export const getPointsSpent = (state: State) => {
  return Object.entries(state).reduce<Record<string, number>>(
    (prev, [tree, ranks]) => {
      prev[tree] = Object.values(ranks).reduce((prev, rank) => {
        return (prev += rank);
      }, 0);
      return prev;
    },
    {},
  );
};

export const getPoints = (pointsSpent: ReturnType<typeof getPointsSpent>) => {
  const totalSpent = Object.values(pointsSpent).reduce<number>(
    (prev, count) => {
      return prev + count;
    },
    0,
  );
  return config.TOTAL_POINTS - totalSpent;
};

export const getMaxedTalents = (state: State, data: TalentData) => {
  return Object.entries(state).reduce<Record<string, Record<string, boolean>>>(
    (prev, [tree, ranks]) => {
      prev[tree] = Object.entries(ranks).reduce<Record<string, boolean>>(
        (prev, [talent, rank]) => {
          prev[talent] = rank === data[tree].talents[talent].maxRank;
          return prev;
        },
        {},
      );
      return prev;
    },
    {},
  );
};

export const getPointsMetTalents = (
  pointsSpent: ReturnType<typeof getPointsSpent>,
  data: TalentData,
) => {
  return Object.entries(data).reduce<Record<string, Record<string, boolean>>>(
    (prev, [tree, treeData]) => {
      prev[tree] = Object.entries(treeData.talents).reduce<
        Record<string, boolean>
      >((prev, [talent, talentData]) => {
        prev[talent] = pointsSpent[tree] >= talentData.reqPoints;
        return prev;
      }, {});
      return prev;
    },
    {},
  );
};

export const getPrereqMetTalents = (
  maxedTalents: ReturnType<typeof getMaxedTalents>,
  data: TalentData,
) => {
  return Object.entries(data).reduce<Record<string, Record<string, boolean>>>(
    (prev, [tree, treeData]) => {
      prev[tree] = Object.entries(treeData.talents).reduce<
        Record<string, boolean>
      >((prev, [talent, talentData]) => {
        if (talentData.prereq) {
          prev[talent] = maxedTalents[tree][talentData.prereq];
        } else {
          prev[talent] = false;
        }
        return prev;
      }, {});
      return prev;
    },
    {},
  );
};

export const getUnlockedTalents = (
  pointsMetTalents: ReturnType<typeof getPointsMetTalents>,
  prereqMetTalents: ReturnType<typeof getPrereqMetTalents>,
  data: TalentData,
) => {
  return Object.entries(data).reduce<Record<string, Record<string, boolean>>>(
    (prev, [tree, treeData]) => {
      prev[tree] = Object.entries(treeData.talents).reduce<
        Record<string, boolean>
      >((prev, [talent, talentData]) => {
        if (talentData.prereq) {
          prev[talent] =
            pointsMetTalents[tree][talent] && prereqMetTalents[tree][talent];
        } else {
          prev[talent] = pointsMetTalents[tree][talent];
        }
        return prev;
      }, {});
      return prev;
    },
    {},
  );
};

// get talents in the tree with at least 1 point spent in them
const getSpentTalents = (state: State, tree: string) => {
  return Object.entries(state[tree]).reduce<Record<string, boolean>>(
    (prev, [talent, rank]) => {
      prev[talent] = rank > 0;
      return prev;
    },
    {},
  );
};

// get points spent in tree that require the same or less points than that in question
const getBasePoints = (
  state: State,
  tree: string,
  talent: string,
  data: TalentData,
) => {
  const reqPoints = data[tree].talents[talent].reqPoints;

  return Object.entries(data[tree].talents).reduce(
    (prev, [talentName, talentData]) => {
      // if talent is of the same tier or lower
      if (talentData.reqPoints <= reqPoints) {
        return prev + state[tree][talentName];
      }
      return prev;
    },
    0,
  );
};

// find out what talents are preventing this one having a point removed from it
export const getTalentDependents = (
  state: State,
  tree: string,
  talentToUnlearn: string,
  maxedTalents: ReturnType<typeof getMaxedTalents>,
  data: TalentData,
) => {
  const basePoints = getBasePoints(state, tree, talentToUnlearn, data);
  const spentTalents = getSpentTalents(state, tree);

  return Object.entries(data[tree].talents).reduce<string[]>(
    (prev, [talent, talentData]) => {
      if (spentTalents[talent] && talentData.reqPoints === basePoints) {
        // if talent has req equal to points spent, therefore with 1 less point it would be illegal
        prev.push(talent);
      } else if (
        // if talent has a prereq that is this talent, therefore unmaxing it would be illegal
        spentTalents[talent] &&
        maxedTalents[tree][talentToUnlearn] &&
        talentData.prereq === talentToUnlearn
      ) {
        prev.push(talent);
      }
      return prev;
    },
    [],
  );
};

// return state as a string of rank numbers, with trees separated by '/'
export const getSerializedState = (state: State) => {
  return Object.values(state)
    .reduce<string[]>((prev, ranks) => {
      prev.push(
        Object.values(ranks)
          .reduce<number[]>((prev, rank) => {
            prev.push(rank);
            return prev;
          }, [])
          .join(""),
      );
      return prev;
    }, [])
    .join("/");
};
