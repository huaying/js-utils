const debounce = require("./debounce");

jest.useFakeTimers();

test("debounce", () => {
  let count = 0;

  const fn = debounce((num) => (count += num), 200);

  fn(1);
  fn(2);
  jest.runAllTimers();
  fn(3);
  fn(4);
  jest.runAllTimers();

  expect(count).toBe(6);
});
