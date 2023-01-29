const filter = require("./filter");

test("filter", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(filter(arr, (item) => item & 1)).toEqual([1, 3, 5]);
});
