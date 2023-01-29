const newInstance = require("./newInstance");

test("newInstance", () => {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  const car1 = newInstance(Car, "Eagle", "Talon TSi", 1993);

  expect(car1.make).toBe("Eagle");
});
