const mergeObject = require("./mergeObject");

test("mergeObject", () => {
  const obj = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1,
  };

  const obj2 = {
    a: { z: 3 },
    b: [2, 3],
    c: "foo",
  };

  const newObj = mergeObject(obj, obj2);

  expect(newObj).toEqual({
    a: [{ x: 2 }, { y: 4 }, { z: 3 }],
    b: [1, 2, 3],
    c: "foo",
  });
});
