const shuffle = require("../src/shuffle");

describe("shuffle function test", () => {
  // CODE HERE
  test("returns an array", () => {
    const inputArr = shuffle(["card1", "card2", "card3", "card4", "card5"]);
    expect(Array.isArray(inputArr)).toBe(true);
  });

  test("returns an array as shuffled", () => {
    const inputArr = shuffle(["card1", "card2", "card3", "card4", "card5"]);
    const resultArr = shuffle(inputArr);
    expect(resultArr).not.toEqual(inputArr);
  });

  test("return an array of the same length as input", () => {
    const inputArr = shuffle(["card1", "card2", "card3", "card4", "card5"]);
    const resultArr = shuffle(inputArr);
    expect(resultArr).toHaveLength(inputArr.length);
  });
});
