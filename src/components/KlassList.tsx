import React from "react";
import { Link } from "react-router-dom";

import "./KlassList.css";
import { requireAll } from "../utils";
import { SquareButton } from "./SquareButton";

const icons = requireAll(require.context("../assets/icons", false));

const KLASSES = [
  {
    name: "Druid",
    icon: icons["class_druid"],
    path: "/druid",
  },
  {
    name: "Hunter",
    icon: icons["class_hunter"],
    path: "/hunter",
  },
  {
    name: "Mage",
    icon: icons["class_mage"],
    path: "/mage",
  },
  {
    name: "Paladin",
    icon: icons["class_paladin"],
    path: "/paladin",
  },
  {
    name: "Priest",
    icon: "",
    path: "/priest",
  },
  {
    name: "Rogue",
    icon: "",
    path: "/rogue",
  },
  {
    name: "Shaman",
    icon: "",
    path: "/shaman",
  },
  {
    name: "Warlock",
    icon: "",
    path: "/warlock",
  },
  {
    name: "Warrior",
    icon: "",
    path: "/warrior",
  },
];

interface Props {}

export const KlassList: React.FC<Props> = () => {
  return (
    <ul className="KlassList">
      {KLASSES.map(klass => (
        <li className="KlassList-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
