import React, { createContext, useReducer, useContext } from "react";

import { State, Action, TalentData } from "./types";
import { reducer } from "./reducer";

const createInitialState = (data: TalentData) => ({
  points: 51,
  talentData: data,
  talentRanks: Object.entries(data).reduce<State["talentRanks"]>(
    (prev, [treeName, tree]) => {
      prev[treeName] = Object.keys(tree.talents).reduce<Record<string, number>>(
        (prev, talentName) => {
          prev[talentName] = 0;
          return prev;
        },
        {}
      );
      return prev;
    },
    {}
  ),
});

const TalentContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const createTalentProvider = (data: TalentData): React.FC => {
  const initialState = createInitialState(data);

  return ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <TalentContext.Provider value={{ state, dispatch }}>
        {children}
      </TalentContext.Provider>
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
