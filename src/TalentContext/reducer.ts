import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
  console.log(state, action);

  switch (action.type) {
    case "POINT_SPENT": {
      const { tree, talent } = action;

      return {
        ...state,
        points: state.points - 1,
        talentRanks: {
          ...state.talentRanks,
          [tree]: {
            ...state.talentRanks[tree],
            [talent]: state.talentRanks[tree][talent] + 1
          }
        }
      };
    }
    default:
      return state;
  }
};
