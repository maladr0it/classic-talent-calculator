import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { KlassList } from "./components/KlassList";
import { Druid } from "./trees/Druid/Druid";
import { Hunter } from "./trees/Hunter";
import { Mage } from "./trees/Mage";
import { Paladin } from "./trees/Paladin";

import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/druid" component={Druid} />
        <Route path="/hunter" component={Hunter} />
        <Route path="/mage" component={Mage} />
        <Route path="/paladin" component={Paladin} />
      </Suspense>
    </div>
  );
};
