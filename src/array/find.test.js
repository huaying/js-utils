const find = require("./find");

test("find", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(find(arr, (item) => item > 3)).toBe(4);
  expect(find(arr, (item) => item > 5)).toBe(undefined);
});
