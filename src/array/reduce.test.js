const reduce = require("./reduce");

test("reduce", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(reduce(arr, (res, val) => res + val, 0)).toBe(15);
});
