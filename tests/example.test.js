// test.js = spec.js

// How to write a single test -->
// test("Description of the test", () => {
//     expect().
// });

test("5 is 5", () => {
  expect(5).toBe(5);
});

test("5 is not 5", () => {
  expect(5).not.toBe(6);
});
