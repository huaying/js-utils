const concat = require("./concat");

test("concat", () => {
  expect(concat([1, 2], [3, 4], 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
});
