interface Talent {
  name: string;
  icon: string;
  description: (points: number) => string;
  maxRank: number;
  reqPoints: number;
  prereq?: string;
}

export interface TalentData {
  [tree: string]: {
    [talent: string]: Talent;
  };
}

export interface State {
  points: number;
  talentRanks: {
    [tree: string]: {
      [talent: string]: number;
    };
  };
  talentData: TalentData;
}

export type Action = {
  type: "POINT_SPENT";
  tree: string;
  talent: string;
};
