import React from "react";

import { KlassList } from "./components/KlassList";
import { Druid } from "./trees/Druid/Druid";

import "./App.css";
import { Hunter } from "./trees/Hunter";

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Druid />
      <Hunter />
    </div>
  );
};
