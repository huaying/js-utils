const clone = require("./clone");

test("clone", () => {
  const obj = { a: 1, b: [1, 2] };

  expect(clone(obj).b).toBe(obj.b);
  expect(clone(obj)).toEqual({ a: 1, b: [1, 2] });
  expect(clone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  expect(clone([1, 2, [3]])).toEqual([1, 2, [3]]);
  expect(clone(1)).toEqual(1);
  expect(clone("123")).toEqual("123");
  expect(clone(null)).toEqual(null);
});
