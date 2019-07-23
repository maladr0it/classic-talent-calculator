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
