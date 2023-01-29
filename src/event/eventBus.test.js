const eventBus = require("./eventBus");

test("eventBus", () => {
  const mockFn1 = jest.fn();
  const mockFn2 = jest.fn();

  eventBus.on("event", mockFn1);
  eventBus.on("event", mockFn2);
  eventBus.emit("event", 2);
  eventBus.off("event");
  eventBus.emit("event", 3);

  expect(mockFn1).toHaveBeenCalledTimes(1);
  expect(mockFn1).toHaveBeenCalledWith(2);
  expect(mockFn2).toHaveBeenCalledTimes(1);
  expect(mockFn2).toHaveBeenCalledWith(2);
});
