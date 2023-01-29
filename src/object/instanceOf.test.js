const instanceOf = require("./instanceOf");

test("instanceOf", () => {
  function Person() {}

  let p = new Person();

  expect(instanceOf(p, Person)).toBe(true);
  expect(instanceOf(p, Object)).toBe(true);
  expect(instanceOf(Person, Object)).toBe(true);
  expect(instanceOf(Person, Function)).toBe(true);
  expect(instanceOf(p, Function)).toBe(false);
});
