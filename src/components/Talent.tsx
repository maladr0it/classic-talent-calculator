import React from "react";

import "./Talent.css";
import { Position } from "./TalentTree";
import { SquareButton } from "./SquareButton";

interface Props {
  imageURL: string;
  position: Position;
  selected: boolean;
}

export const Talent: React.FC<Props> = ({ position, ...rest }) => {
  return (
    <SquareButton className="Talent" style={{ gridArea: position }} {...rest} />
  );
};
