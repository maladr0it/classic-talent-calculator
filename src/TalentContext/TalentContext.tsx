import React, { createContext, useReducer, useContext } from "react";

import { State, Action, TalentData } from "./types";
import { reducer } from "./reducer";

const createInitialState = (data: TalentData) => ({
  points: 0,
  talentData: data,
  talents: Object.entries(data).reduce<State["talents"]>(
    (prev, [treeName, tree]) => {
      prev[treeName] = Object.keys(tree).reduce<Record<string, number>>(
        (prev, talentName) => {
          prev[talentName] = 0;
          return prev;
        },
        {}
      );
      return prev;
    },
    {}
  )
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

// export const createTalentContext = (data: TalentData) => {
//   const initialState = createInitialState(data);
//   const TalentContext = createContext<{
//     state: typeof initialState;
//     dispatch: React.Dispatch<Action>;
//   } | null>(null);

//   const TalentProvider: React.FC = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//       <TalentContext.Provider value={{ state, dispatch }}>
//         {children}
//       </TalentContext.Provider>
//     );
//   };

//   const useTalentContext = () => {
//     const context = useContext(TalentContext);

//     if (context === null) {
//       throw new Error(
//         "Components using useTalentContext must be children of TalentContextProvider"
//       );
//     }
//     return context;
//   };

//   return {
//     TalentProvider,
//     useTalentContext
//   };
// };
