const slice = require("./slice");

test("slice", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(slice(arr, 2, 5)).toEqual([3, 4, 5]);
  expect(slice(arr, 1, -1)).toEqual([2, 3, 4]);
  expect(slice(arr, 1)).toEqual([2, 3, 4, 5]);
  expect(slice(arr)).toEqual([1, 2, 3, 4, 5]);
  expect(slice(arr, -2, 4)).toEqual([3, 4]);
  expect(slice([], -2, 4)).toEqual([]);
});
