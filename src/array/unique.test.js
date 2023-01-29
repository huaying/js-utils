const unique = require("./unique");

test("unique", () => {
  const arr = [1, 1, 2, 3, 2, 4, 5];

  expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
});
