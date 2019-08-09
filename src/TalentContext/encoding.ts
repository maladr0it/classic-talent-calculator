import { State, TalentData } from "./types";
import { encodeState, decodeState } from "../utils";

const getTreeStateFromHash = (talentNames: string[], hash: string = "") => {
  const ranks = decodeState(hash);
  return talentNames.reduce<Record<string, number>>((prev, name, i) => {
    prev[name] = ranks[i] || 0;
    return prev;
  }, {});
};

export const getStateFromHash = (data: TalentData, hash: string = "") => {
  const hashes = hash.split("-");
  return Object.entries(data).reduce<State>((prev, [treeName, treeData], i) => {
    prev[treeName] = getTreeStateFromHash(
      Object.keys(treeData.talents),
      hashes[i],
    );
    return prev;
  }, {});
};

export const getHashFromState = (state: State) => {
  return Object.values(state)
    .reduce<string[]>((prev, ranks) => {
      const treeHash = encodeState(Object.values(ranks));
      if (treeHash) {
        prev.push(encodeState(Object.values(ranks)));
      }
      return prev;
    }, [])
    .join("-");
};
