const map = require("./map");

test("map", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(
    map(arr, (item) => {
      return item * item;
    })
  ).toEqual([1, 4, 9, 16, 25]);
});
