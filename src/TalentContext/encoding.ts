import { State, TalentData } from "./types";
import { encodeState, decodeState, trimEnd } from "../utils";

const SPLIT_SYMBOL = "-";

const getTreeStateFromHash = (talentNames: string[], hash: string = "") => {
  const ranks = decodeState(hash);
  return talentNames.reduce<Record<string, number>>((prev, name, i) => {
    prev[name] = ranks[i] || 0;
    return prev;
  }, {});
};

export const getStateFromHash = (data: TalentData, hash: string = "") => {
  const hashes = hash.split(SPLIT_SYMBOL);
  return Object.entries(data).reduce<State>((prev, [treeName, treeData], i) => {
    prev[treeName] = getTreeStateFromHash(
      Object.keys(treeData.talents),
      hashes[i],
    );
    return prev;
  }, {});
};

export const getHashFromState = (state: State) => {
  const hashes = Object.values(state).reduce<string[]>((prev, ranks) => {
    const treeHash = encodeState(Object.values(ranks));
    prev.push(treeHash || "0");
    return prev;
  }, []);
  return trimEnd("0", hashes).join(SPLIT_SYMBOL);
};
