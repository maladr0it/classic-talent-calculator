interface Talent {
  name: string;
  icon: string;
  description: (points: number) => string;
  maxPoints: number;
}

export interface TalentData {
  [tree: string]: {
    [talent: string]: Talent;
  };
}

export interface State {
  points: number;
  talents: {
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
