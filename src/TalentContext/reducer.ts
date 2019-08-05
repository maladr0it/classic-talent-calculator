import { State, Action } from "./types";

export const makeReducer = (initialState: State) => (
  state: State,
  action: Action,
): State => {
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

    case "TREE_RESET": {
      const { tree } = action;

      return {
        ...state,
        [tree]: {
          ...initialState[tree],
        },
      };
    }

    case "ALL_RESET": {
      return {
        ...initialState,
      };
    }

    case "STATE_RESTORED": {
      const { newState } = action;

      return {
        ...newState,
      };
    }

    default:
      return state;
  }
};
