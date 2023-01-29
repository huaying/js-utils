const throttle = require("./throttle");

jest.useFakeTimers();

test("throttle", () => {
  let count = 0;

  const fn = throttle((num) => (count += num), 200);

  fn(1);
  fn(2);
  jest.runAllTimers();
  fn(3);
  fn(4);
  jest.runAllTimers();
  fn(5);

  expect(count).toBe(9);
});
