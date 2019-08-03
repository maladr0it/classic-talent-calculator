export type Position =
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "d1"
  | "d2"
  | "d3"
  | "d4"
  | "e1"
  | "e2"
  | "e3"
  | "e4"
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "g1"
  | "g2"
  | "g3"
  | "g4";

export type ArrowDir = "right" | "down" | "right-down" | "right-down-down";

interface Talent {
  name: string;
  pos: Position;
  icon: string;
  description: (points: number) => string;
  maxRank: number;
  reqPoints: number;
  prereq?: string;
  arrows?: { dir: ArrowDir; from: Position; to: Position }[];
}

export interface TalentData {
  [tree: string]: {
    name: string;
    background: string;
    talents: {
      [talent: string]: Talent;
    };
  };
}

export interface State {
  [tree: string]: {
    [talent: string]: number;
  };
}

export type Action =
  | {
      type: "POINT_SPENT";
      tree: string;
      talent: string;
    }
  | {
      type: "POINT_UNSPENT";
      tree: string;
      talent: string;
    };
