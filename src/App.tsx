import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const Druid = lazy(() => import("./trees/Druid"));
const Hunter = lazy(() => import("./trees/Hunter"));
const Mage = lazy(() => import("./trees/Mage"));
const Paladin = lazy(() => import("./trees/Paladin"));
const Priest = lazy(() => import("./trees/Priest"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/druid" component={Druid} />
        <Route path="/hunter" component={Hunter} />
        <Route path="/mage" component={Mage} />
        <Route path="/paladin" component={Paladin} />
        <Route path="/priest" component={Priest} />
      </Suspense>
    </div>
  );
};
