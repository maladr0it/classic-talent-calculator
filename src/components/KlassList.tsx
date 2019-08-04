import React from "react";
import { Link } from "react-router-dom";

import "./KlassList.css";
import { requireAll } from "../utils";
import { SquareButton } from "./SquareButton";

const icons = requireAll(require.context("../assets/icons", false));

const KLASSES = [
  {
    name: "Druid",
    icon: icons["druid-icon"],
    path: "/druid",
  },
  {
    name: "Hunter",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/hunter",
  },
  {
    name: "Mage",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/mage",
  },
  {
    name: "Paladin",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/paladin",
  },
  {
    name: "Priest",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/priest",
  },
  {
    name: "Rogue",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/rogue",
  },
  {
    name: "Shaman",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/shaman",
  },
  {
    name: "Warlock",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
    path: "/warlock",
  },
  {
    name: "Warrior",
    icon: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg",
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
