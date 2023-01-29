const PubSub = require("./pubSub");

test("PubSub", () => {
  const mockFn1 = jest.fn();
  const mockFn2 = jest.fn();

  const pid1 = PubSub.subscribe("topic", mockFn1);
  PubSub.subscribe("topic", mockFn2);
  PubSub.publish("topic", 2);
  PubSub.unsubscribe(pid1);
  PubSub.publish("topic", 3);
  PubSub.unsubscribe("topic");
  PubSub.publish("topic", 4);

  expect(mockFn1).toHaveBeenCalledTimes(1);
  expect(mockFn1).toHaveBeenCalledWith(2);
  expect(mockFn2).toHaveBeenCalledTimes(2);
  expect(mockFn2).toHaveBeenLastCalledWith(3);
});
