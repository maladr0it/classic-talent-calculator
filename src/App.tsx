import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const Druid = lazy(() => import("./trees/Druid"));
const Hunter = lazy(() => import("./trees/Hunter"));
const Mage = lazy(() => import("./trees/Mage"));
const Paladin = lazy(() => import("./trees/Paladin"));
const Priest = lazy(() => import("./trees/Priest"));
const Rogue = lazy(() => import("./trees/Rogue"));
const Shaman = lazy(() => import("./trees/Shaman"));
const Warlock = lazy(() => import("./trees/Warlock"));
const Warrior = lazy(() => import("./trees/Warrior"));

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
        <Route path="/rogue" component={Rogue} />
        <Route path="/shaman" component={Shaman} />
        <Route path="/warlock" component={Warlock} />
        <Route path="/warrior" component={Warrior} />
      </Suspense>
    </div>
  );
};
