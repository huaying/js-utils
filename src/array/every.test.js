const every = require("./every");

test("every", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(every(arr, (item) => item <= 3)).toBe(false);
  expect(every(arr, (item) => item <= 5)).toBe(true);
});
