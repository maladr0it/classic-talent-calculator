import React from "react";

import "./Tooltip.css";
import tooltipBackground from "../assets/tooltip.png";

export type TooltipPos = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  position: TooltipPos;
}

export const Tooltip = React.forwardRef<HTMLDivElement, Props>(
  ({ position, children }, ref) => {
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
          <div className="Tooltip-content">{children}</div>
        </div>
      </div>
    );
  }
);
