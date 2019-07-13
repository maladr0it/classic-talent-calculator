import React, { useState, useRef } from "react";

import "./WithTooltip.css";
import { Tooltip } from "./Tooltip";

interface Props {
  children: (
    itemRef: React.MutableRefObject<HTMLButtonElement | null>
  ) => React.ReactNode;
}

export const WithTooltip: React.FC<Props> = ({ children }) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="WithTooltip-container">
      {children(itemRef)}
      <Tooltip>Hey</Tooltip>
    </div>
  );
};
