import React, { createContext, useReducer, useContext, useEffect } from "react";

import { State, TalentData } from "./types";
import {
  getPointsSpent,
  getPoints,
  getMaxedTalents,
  getPointsMetTalents,
  getPrereqMetTalents,
  getUnlockedTalents,
  getTalentDependents,
  getSerializedState,
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
  points: ReturnType<typeof getPoints>;
  pointsSpent: ReturnType<typeof getPointsSpent>;
  pointsMetTalents: ReturnType<typeof getPointsMetTalents>;
  maxedTalents: ReturnType<typeof getMaxedTalents>;
  prereqMetTalents: ReturnType<typeof getPrereqMetTalents>;
  unlockedTalents: ReturnType<typeof getUnlockedTalents>;
  spendPoint: (tree: string, talent: string) => void;
  unspendPoint: (tree: string, talent: string) => void;
  resetTree: (tree: string) => void;
  resetAll: () => void;
} | null>(null);

export const createTalentProvider = (data: TalentData): React.FC => {
  const initialState = createInitialState(data);

  return ({ children }) => {
    const [state, dispatch] = useReducer(
      makeReducer(initialState),
      initialState,
    );

    const pointsSpent = getPointsSpent(state);
    const points = getPoints(pointsSpent);
    const pointsMetTalents = getPointsMetTalents(pointsSpent, data);
    const maxedTalents = getMaxedTalents(state, data);
    const prereqMetTalents = getPrereqMetTalents(maxedTalents, data);
    const unlockedTalents = getUnlockedTalents(
      pointsMetTalents,
      prereqMetTalents,
      data,
    );

    const spendPoint = (tree: string, talent: string) => {
      const unlocked = unlockedTalents[tree][talent];
      const maxed = maxedTalents[tree][talent];

      if (unlocked && !maxed && points > 0) {
        dispatch({ type: "POINT_SPENT", tree, talent });
      }
    };

    const unspendPoint = (tree: string, talent: string) => {
      const rank = state[tree][talent];
      const dependents = getTalentDependents(
        state,
        tree,
        talent,
        maxedTalents,
        data,
      );
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

    const value = {
      state,
      data,
      points,
      pointsSpent,
      pointsMetTalents,
      maxedTalents,
      prereqMetTalents,
      unlockedTalents,
      spendPoint,
      unspendPoint,
      resetTree,
      resetAll,
    };

    useEffect(() => {
      console.log(getSerializedState(state));
    }, [state]);

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
