const call = require("./call");

test("call", () => {
  function add(a, b) {
    return a + b + (this.c ?? 0);
  }

  expect(call(add, null, 1, 2)).toBe(3);
  expect(call(add, { c: 3 }, 1, 2)).toBe(6);
});
