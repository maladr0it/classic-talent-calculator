import React, { createContext, useReducer, useContext } from "react";

import { State, TalentData } from "./types";
import {
  isTalentUnlocked,
  isTalentMaxed,
  getPointsLeft,
  getTalentRank,
  getTalentDependents,
} from "./selectors";
import { makeReducer } from "./reducer";

const createInitialState = (data: TalentData) =>
  Object.entries(data).reduce<State>((prev, [treeName, tree]) => {
    prev[treeName] = Object.keys(tree.talents).reduce<Record<string, number>>(
      (prev, talentName) => {
        prev[talentName] = 0;
        return prev;
      },
      {},
    );
    return prev;
  }, {});

const TalentContext = createContext<{
  state: State;
  data: TalentData;
  spendPoint: (tree: string, talent: string) => void;
  unspendPoint: (tree: string, talent: string) => void;
  resetTree: (tree: string) => void;
  resetAll: () => void;
  restoreState: (newState: State) => void;
} | null>(null);

export const createTalentProvider = (data: TalentData): React.FC => {
  const initialState = createInitialState(data);

  return ({ children }) => {
    const [state, dispatch] = useReducer(
      makeReducer(initialState),
      initialState,
    );

    const spendPoint = (tree: string, talent: string) => {
      const pointsLeft = getPointsLeft(state);
      const unlocked = isTalentUnlocked(state, data, tree, talent);
      const maxed = isTalentMaxed(state, data, tree, talent);

      if (unlocked && !maxed && pointsLeft > 0) {
        dispatch({ type: "POINT_SPENT", tree, talent });
      }
    };

    const unspendPoint = (tree: string, talent: string) => {
      const rank = getTalentRank(state, tree, talent);
      const dependents = getTalentDependents(state, data, tree, talent);

      if (dependents.length === 0 && rank > 0) {
        dispatch({
          type: "POINT_UNSPENT",
          tree,
          talent,
        });
      }
    };

    const resetTree = (tree: string) => {
      dispatch({ type: "TREE_RESET", tree });
    };

    const resetAll = () => {
      dispatch({ type: "ALL_RESET" });
    };

    const restoreState = (newState: State) => {
      dispatch({ type: "STATE_RESTORED", newState });
    };

    const value = {
      state,
      data,
      spendPoint,
      unspendPoint,
      resetTree,
      resetAll,
      restoreState,
    };

    return (
      <TalentContext.Provider value={value}>{children}</TalentContext.Provider>
    );
  };
};

export const useTalentContext = () => {
  const context = useContext(TalentContext);

  if (context === null) {
    throw new Error(
      "Components using useTalentContext must be children of TalentContextProvider",
    );
  }
  return context;
};
