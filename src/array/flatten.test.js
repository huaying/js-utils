const flatten = require("./flatten");

test("flatten", () => {
  const arr = [1, 2, [3, [4, 5]]];

  expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
});
