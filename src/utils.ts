export const talentText = (
  string: TemplateStringsArray,
  ...expressions: (number)[][]
) => (rank: number) => {
  const result = [string[0]];
  expressions.forEach((expression, i) => {
    result.push(expression[rank - 1].toString(), string[i + 1]);
  });
  return result.join("");
};

export const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().reduce<Record<string, string>>((prev, key) => {
    // todo: this regex is quite brittle
    const name = key.replace(/\.\//, "").replace(/\.[^.]+$/, "");
    prev[name] = requireContext(key);
    return prev;
  }, {});
};
