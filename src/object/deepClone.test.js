const deepClone = require("./deepClone");

test("deepClone", () => {
  const obj = { a: 1, b: [1, 2] };

  expect(deepClone(obj).b).not.toBe(obj.b);
  expect(deepClone(obj)).toEqual({ a: 1, b: [1, 2] });
  expect(deepClone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  expect(deepClone([1, 2, [3]])).toEqual([1, 2, [3]]);
  expect(deepClone(1)).toEqual(1);
  expect(deepClone("123")).toEqual("123");
  expect(deepClone(null)).toEqual(null);
});
