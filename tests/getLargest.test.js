const getLargest = require("../getLargest");

// console.log(getLargest);

test("getLargest is a function", () => {
  expect(typeof getLargest).toBe("function");
});

test("getLargest returns the largest value", () => {
  const result = getLargest(1, 2, 3);

  expect(result).toEqual(3);
});
