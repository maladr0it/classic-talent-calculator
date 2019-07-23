import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
  console.log(state, action);

  switch (action.type) {
    case "POINT_SPENT": {
      const { tree, talent } = action;

      return {
        ...state,
        points: state.points - 1,
        talents: {
          [tree]: {
            ...state.talents[tree],
            [talent]: state.talents[tree][talent] + 1
          }
        }
      };
    }
    default:
      return state;
  }
};
