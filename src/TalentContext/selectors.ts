import { State, TalentData } from "./types";
import { config } from "../config";

export const getTalentRank = (state: State, tree: string, talent: string) => {
  return state[tree][talent];
};

export const getTalentData = (
  data: TalentData,
  tree: string,
  talent: string,
) => {
  return data[tree].talents[talent];
};

const getTreeTalents = (data: TalentData, tree: string) => {
  return data[tree].talents;
};

export const getTreeData = (data: TalentData, tree: string) => {
  return data[tree];
};

export const getTreePointsSpent = (state: State, tree: string) => {
  const ranks = Object.values(state[tree]);
  return ranks.reduce((prev, rank) => {
    return prev + rank;
  }, 0);
};

export const getPointsSpent = (state: State) => {
  const treeNames = Object.keys(state);
  return treeNames.reduce((prev, treeName) => {
    return prev + getTreePointsSpent(state, treeName);
  }, 0);
};

export const getPointsLeft = (state: State) => {
  return config.TOTAL_POINTS - getPointsSpent(state);
};

export const isTalentMaxed = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const talentRank = getTalentRank(state, tree, talent);
  const talentData = getTalentData(data, tree, talent);
  return talentRank === talentData.maxRank;
};

export const areReqPointsMet = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const treePointsSpent = getTreePointsSpent(state, tree);
  const talentData = getTalentData(data, tree, talent);
  return treePointsSpent >= talentData.reqPoints;
};

export const isPrereqMet = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const talentData = getTalentData(data, tree, talent);
  if (talentData.prereq) {
    return isTalentMaxed(state, data, tree, talentData.prereq);
  }
  // TODO: returns true if there is no prereq, could cause problems
  return true;
};

// todo: doesn't consider if there are any remaining points
export const isTalentUnlocked = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const prereqMet = isPrereqMet(state, data, tree, talent);
  const reqPointsMet = areReqPointsMet(state, data, tree, talent);
  return prereqMet && reqPointsMet;
};

const getBasePoints = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const { reqPoints } = getTalentData(data, tree, talent);
  // get talents which require less than or equal to these points,
  // sum their ranks
  return Object.entries(getTreeTalents(data, tree)).reduce(
    (prev, [talentName, talentData]) => {
      if (talentData.reqPoints <= reqPoints) {
        return prev + getTalentRank(state, tree, talentName);
      }
      return prev;
    },
    0,
  );
};

export const getTalentDependents = (
  state: State,
  data: TalentData,
  tree: string,
  talent: string,
) => {
  const basePoints = getBasePoints(state, data, tree, talent);
  const treeTalents = getTreeTalents(data, tree);

  return Object.entries(treeTalents).reduce<string[]>(
    (prev, [talentName, talentData]) => {
      const rank = getTalentRank(state, tree, talentName);
      const { prereq } = talentData;

      if (talentData.reqPoints === basePoints && rank > 0) {
        // if the talent has req equal to base points spent, therefore 1 less point and it would be illegal
        prev.push(talentName);
      } else if (prereq === talent && rank > 0) {
        prev.push(talentName);
      }
      return prev;
    },
    [],
  );
};
