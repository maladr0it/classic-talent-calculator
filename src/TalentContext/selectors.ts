import { State } from "./types";

export const getTalentPoints = (state: State, tree: string, talent: string) => {
  return state.talents[tree][talent];
};

export const getTalentData = (state: State, tree: string, talent: string) => {
  return state.talentData[tree][talent];
};
