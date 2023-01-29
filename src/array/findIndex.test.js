const findIndex = require("./findIndex");

test("findIndex", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(findIndex(arr, (item) => item > 3)).toBe(3);
  expect(findIndex(arr, (item) => item > 5)).toBe(-1);
});
