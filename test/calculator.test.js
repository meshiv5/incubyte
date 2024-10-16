const StringCalculator = require("../src/calculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number for single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return sum for two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiter", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("should throw error for negative numbers", () => {
    expect(() => {
      calculator.add("1,-2,-3,4");
    }).toThrow("negative numbers not allowed: -2,-3");
  });
});
