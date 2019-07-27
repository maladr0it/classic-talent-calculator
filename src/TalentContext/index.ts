import { Position } from "./types";

export { createTalentProvider, useTalentContext } from "./TalentContext";
export {
  getTalentRank,
  getTreeData,
  getTalentData,
  getPointsSpent,
  isTalentAvailable,
} from "./selectors";

// TODO: think of a cleaner way to re-export
export type Position = Position;
