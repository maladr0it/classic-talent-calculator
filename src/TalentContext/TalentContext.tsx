import React, { createContext, useReducer, useContext } from "react";

import { State, Action, TalentData } from "./types";
import {
  getPointsSpent,
  getMaxedTalents,
  getPointsMetTalents,
  getPrereqMetTalents,
  getUnlockedTalents,
  getPoints,
} from "./selectors";
import { reducer } from "./reducer";

const createInitialState = (data: TalentData) =>
  Object.entries(data).reduce<State>((prev, [treeName, tree]) => {
    prev[treeName] = Object.keys(tree.talents).reduce<Record<string, number>>(
      (prev, talentName) => {
        prev[talentName] = 0;
        return prev;
      },
      {}
    );
    return prev;
  }, {});

const TalentContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  data: TalentData;
  points: ReturnType<typeof getPoints>;
  pointsSpent: ReturnType<typeof getPointsSpent>;
  pointsMetTalents: ReturnType<typeof getPointsMetTalents>;
  maxedTalents: ReturnType<typeof getMaxedTalents>;
  prereqMetTalents: ReturnType<typeof getPrereqMetTalents>;
  unlockedTalents: ReturnType<typeof getUnlockedTalents>;
} | null>(null);

export const createTalentProvider = (data: TalentData): React.FC => {
  const initialState = createInitialState(data);

  return ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const pointsSpent = getPointsSpent(state);
    const points = getPoints(pointsSpent);
    const pointsMetTalents = getPointsMetTalents(pointsSpent, data);
    const maxedTalents = getMaxedTalents(state, data);
    const prereqMetTalents = getPrereqMetTalents(maxedTalents, data);
    const unlockedTalents = getUnlockedTalents(
      pointsMetTalents,
      prereqMetTalents,
      data
    );

    const value = {
      state,
      dispatch,
      data,
      points,
      pointsSpent,
      pointsMetTalents,
      maxedTalents,
      prereqMetTalents,
      unlockedTalents,
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
      "Components using useTalentContext must be children of TalentContextProvider"
    );
  }
  return context;
};
