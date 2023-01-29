const apply = require("./apply");

test("apply", () => {
  function add(a, b) {
    return a + b + (this.c ?? 0);
  }

  expect(apply(add, null, [1, 2])).toBe(3);
  expect(apply(add, { c: 3 }, [1, 2])).toBe(6);
});
