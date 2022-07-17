const each = require("jest-each").default;

const getLargest = require("../numberFunctions");

// console.log(getLargest);

// test("getLargest is a function", () => {
//   expect(typeof getLargest).toBe("function");
// });

// test("getLargest returns the largest value", () => {
//   const result = getLargest(1, 2, 3);

//   expect(result).toEqual(3);
// });

// To simplify we use "describe" -->
describe("getLargest", () => {
  test("It is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("It handles normal inputs successfully", () => {
    each([
      [[1, 2, 3], 3],
      [[9, 8, 7], 9],
      [[12, 36, 19], 36],
    ]).test("%s -> %s", (arr, expected) => {
      expect(getLargest(...arr)).toEqual(expected);
    });
  });
});
