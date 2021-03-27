export const calculate: (
  firstValue: number,
  operator: string,
  secondValue: number
) => number = (firstValue, operator, secondValue) => {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/": {
      if (secondValue === 0) return 0;
      else return firstValue / secondValue;
    }
    default:
      return 0;
  }
};
