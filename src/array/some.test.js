const some = require("./some");

test("some", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(some(arr, (item) => item >= 4)).toBe(true);
  expect(some(arr, (item) => item >= 6)).toBe(false);
});
