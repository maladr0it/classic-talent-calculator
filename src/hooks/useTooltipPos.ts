import { useState, useRef, useLayoutEffect } from "react";

// TODO: should be hidden by default
const DEFAULT_POS = "topRight";

export type TooltipPos = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

export const useTooltipPos = <T extends HTMLElement, U extends HTMLElement>(
  // Optional dependencies for the positioning effect.
  // Useful if the content of the tooltip can change while it's visible
  ...deps: any[]
) => {
  const anchorRef = useRef<T | null>(null);
  const tooltipRef = useRef<U | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPos>(DEFAULT_POS);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (!tooltipVisible || !tooltipRef.current || !anchorRef.current) {
      return;
    }
    const getPosition = (): TooltipPos => {
      if (!tooltipRef.current || !anchorRef.current) {
        return DEFAULT_POS;
      }
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const fitsTop = anchorRect.top >= tooltipRect.height;
      const fitsRight = viewportWidth - anchorRect.right >= tooltipRect.width;
      const fitsBottom =
        viewportHeight - anchorRect.bottom >= tooltipRect.height;
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
        return DEFAULT_POS;
      }
    };

    setTooltipPos(getPosition());
  }, [tooltipVisible, ...deps]);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  // TODO: consider memoizing this?
  return {
    anchorProps: {
      ref: anchorRef,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    },
    tooltipProps: { ref: tooltipRef, position: tooltipPos },
    tooltipVisible,
  };
};
