import { State, TalentData } from "./types";

// points spent in each tree
export const getPointsSpent = (state: State) => {
  return Object.entries(state).reduce<Record<string, number>>(
    (prev, [tree, ranks]) => {
      prev[tree] = Object.values(ranks).reduce((prev, rank) => {
        return (prev += rank);
      }, 0);
      return prev;
    },
    {}
  );
};

export const getPoints = (pointsSpent: ReturnType<typeof getPointsSpent>) => {
  const totalSpent = Object.values(pointsSpent).reduce<number>(
    (prev, count) => {
      return prev + count;
    },
    0
  );
  return 51 - totalSpent;
};

export const getMaxedTalents = (state: State, data: TalentData) => {
  return Object.entries(state).reduce<Record<string, Record<string, boolean>>>(
    (prev, [tree, ranks]) => {
      prev[tree] = Object.entries(ranks).reduce<Record<string, boolean>>(
        (prev, [talent, rank]) => {
          prev[talent] = rank === data[tree].talents[talent].maxRank;
          return prev;
        },
        {}
      );
      return prev;
    },
    {}
  );
};

export const getPointsMetTalents = (
  pointsSpent: ReturnType<typeof getPointsSpent>,
  data: TalentData
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
    {}
  );
};

export const getPrereqMetTalents = (
  maxedTalents: ReturnType<typeof getMaxedTalents>,
  data: TalentData
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
    {}
  );
};

export const getUnlockedTalents = (
  pointsMetTalents: ReturnType<typeof getPointsMetTalents>,
  prereqMetTalents: ReturnType<typeof getPrereqMetTalents>,
  data: TalentData
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
    {}
  );
};
