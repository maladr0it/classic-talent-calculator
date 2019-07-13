import React from "react";

import { KlassList } from "./components/KlassList";
import { Druid } from "./trees/Druid";

import { WithTooltip } from "./components/WithTooltip";

import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Druid />
      {/* <WithTooltip>{ref => <button ref={ref}>WEW</button>}</WithTooltip> */}
    </div>
  );
};
