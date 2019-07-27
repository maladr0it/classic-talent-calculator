import { State } from "./types";

export const getTalentRank = (state: State, tree: string, talent: string) => {
  return state.talentRanks[tree][talent];
};

export const getTalentData = (state: State, tree: string, talent: string) => {
  return state.talentData[tree][talent];
};

// TODO: memoize this
export const getPointsSpent = (state: State, tree: string) => {
  return Object.values(state.talentRanks[tree]).reduce((prev, rank) => {
    return prev + rank;
  }, 0);
};

export const isTalentMaxed = (state: State, tree: string, talent: string) => {
  const { maxRank } = getTalentData(state, tree, talent);
  const rank = getTalentRank(state, tree, talent);
  return maxRank === rank;
};

// get all

// talent must:
// at least 1 total point available to spend
// reqPoints met
// prereq talent (if any) is maxed
export const isTalentAvailable = (
  state: State,
  tree: string,
  talent: string
) => {
  const { points } = state;
  if (points < 1) {
    return false;
  }

  const pointsSpent = getPointsSpent(state, tree);
  const talentData = getTalentData(state, tree, talent);

  if (pointsSpent < talentData.reqPoints) {
    return false;
  }

  if (talentData.prereq && !isTalentMaxed(state, tree, talentData.prereq)) {
    return false;
  }

  return true;
};
