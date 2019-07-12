export const talentText = (
  string: TemplateStringsArray,
  ...expressions: (number)[][]
) => (points: number) => {
  const result = [string[0]];
  expressions.forEach((expression, i) => {
    result.push(expression[points - 1].toString(), string[i + 1]);
  });
  return result.join("");
};
