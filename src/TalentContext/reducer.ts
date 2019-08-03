import { State, Action } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "POINT_SPENT": {
      const { tree, talent } = action;

      return {
        ...state,
        [tree]: {
          ...state[tree],
          [talent]: state[tree][talent] + 1,
        },
      };
    }

    case "POINT_UNSPENT": {
      const { tree, talent } = action;

      return {
        ...state,
        [tree]: {
          ...state[tree],
          [talent]: state[tree][talent] - 1,
        },
      };
    }

    default:
      return state;
  }
};
