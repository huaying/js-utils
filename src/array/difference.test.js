const difference = require("./difference");

test("difference", () => {
  expect(difference([1, 3, 5, 7], [3, 5, 8])).toEqual([1, 7]);
});
