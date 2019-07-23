import { createContext, useContext } from "react";

export const TreeContext = createContext<string | null>(null);

export const useTreeContext = () => {
  const context = useContext(TreeContext);

  if (context === null) {
    throw new Error(
      "Components using useTreeContext must be children of TreeContext.Provider"
    );
  }

  return context;
};
