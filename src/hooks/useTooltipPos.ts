import { useState, useRef, useLayoutEffect } from "react";

import { TooltipPos } from "../components/Tooltip";

export const useTooltipPos = <T extends HTMLElement, U extends HTMLElement>(
  defaultPos: TooltipPos
) => {
  const anchorRef = useRef<T | null>(null);
  const tooltipRef = useRef<U | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPos>(defaultPos);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (!tooltipVisible || !tooltipRef.current || !anchorRef.current) {
      return;
    }
    const getPosition = (): TooltipPos => {
      if (!tooltipRef.current || !anchorRef.current) {
        return "topRight";
      }
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const fitsTop = anchorRect.top >= tooltipRect.height;
      const fitsRight = anchorRect.right >= tooltipRect.width;
      const fitsBottom = anchorRect.bottom >= tooltipRect.height;
      const fitsLeft = anchorRect.left >= tooltipRect.width;

      if (fitsTop && fitsRight) {
        return "topRight";
      } else if (fitsTop && fitsLeft) {
        return "topLeft";
      } else if (fitsBottom && fitsRight) {
        return "bottomRight";
      } else if (fitsBottom && fitsLeft) {
        return "bottomLeft";
      } else {
        return "topRight";
      }
    };

    setTooltipPos(getPosition());
  }, [tooltipVisible]);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  // TODO: consider memoizing this?
  return {
    anchorProps: {
      ref: anchorRef,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip
    },
    tooltipProps: { ref: tooltipRef, position: tooltipPos },
    tooltipVisible
  };
};
