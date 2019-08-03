import React from "react";

import { KlassList } from "./components/KlassList";
import { Druid } from "./trees/Druid/Druid";
import { Hunter } from "./trees/Hunter";

import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Druid />
    </div>
  );
};
