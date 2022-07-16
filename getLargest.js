// Function

const getLargest = (a, b, c) => {
  //   if (a > b) {
  //     return a;
  //   } else if (b > c) {
  //     return b;
  //   } else if (c > a) {
  //     return c;
  //   }
  return Math.max(a, b, c);
};

// console.log(getLargest(3, 6, 1));

// Export the function so it's available to other files
module.exports = getLargest;
