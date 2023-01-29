const bind = require("./bind");

test("bind", () => {
  function add(a, b) {
    return a + b + (this.c ?? 0);
  }

  const obj = { c: 3 };
  const fn = bind(add, obj, 1, 2);
  const fn2 = bind(add, obj);

  expect(fn()).toBe(6);
  expect(fn2(1, 2)).toBe(6);
});
