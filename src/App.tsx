import React from "react";
import { Route } from "react-router-dom";

import { KlassList } from "./components/KlassList";
import { Druid } from "./trees/Druid/Druid";
import { Hunter } from "./trees/Hunter";
import { Mage } from "./trees/Mage";

import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Route path="/druid" component={Druid} />
      <Route path="/hunter" component={Hunter} />
      <Route path="/mage" component={Mage} />
    </div>
  );
};
