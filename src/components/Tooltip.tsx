import React from "react";

import "./Tooltip.css";
import { TooltipPos } from "../hooks/useTooltipPos";
import tooltipBackground from "../assets/tooltip.png";

interface Props extends React.ComponentPropsWithRef<"div"> {
  position: TooltipPos;
  contentClassname?: string;
}

export const Tooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ position, contentClassname = "", children }, ref) => {
    return (
      <div className={`Tooltip-container Tooltip-container--${position}`}>
        <div ref={ref} className="Tooltip">
          <div className="Tooltip-backgroundContainer">
            <div
              className="Tooltip-background--topLeft"
              style={{ backgroundImage: `url(${tooltipBackground})` }}
            />
            <div
              className="Tooltip-background--topRight"
              style={{ backgroundImage: `url(${tooltipBackground})` }}
            />
            <div
              className="Tooltip-background--bottomLeft"
              style={{ backgroundImage: `url(${tooltipBackground})` }}
            />
            <div
              className="Tooltip-background--bottomRight"
              style={{ backgroundImage: `url(${tooltipBackground})` }}
            />
          </div>
          <div className={`Tooltip-content ${contentClassname}`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);
