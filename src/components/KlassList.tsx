import React from "react";

import { SquareButton } from "./SquareButton";
import "./KlassList.css";

const KLASSES = [
  {
    name: "druid",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "hunter",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "mage",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "paladin",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "priest",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "rogue",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "shaman",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "warlock",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  },
  {
    name: "warrior",
    iconURL: "https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg"
  }
];

export const KlassList: React.FC = () => {
  return (
    <ul className="KlassList">
      {KLASSES.map((klass, i) => (
        <li className="KlassList-item" key={klass.name}>
          <SquareButton
            state="enabled"
            icon={klass.iconURL}
            disabledIcon={klass.iconURL}
            selected={i % 2 === 0}
          />
        </li>
      ))}
    </ul>
  );
};
