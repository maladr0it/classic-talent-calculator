import { State } from "./types";

export const getTalentRank = (state: State, tree: string, talent: string) => {
  return state.talentRanks[tree][talent];
};

export const getTalentData = (state: State, tree: string, talent: string) => {
  return state.talentData[tree][talent];
};

export const getPointsSpent = (state: State, tree: string) => {
  return Object.values(state.talentRanks[tree]).reduce((prev, rank) => {
    return prev + rank;
  }, 0);
};
