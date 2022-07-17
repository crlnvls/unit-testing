// Function

const getLargest = (a, b, c) => {
  //   if (a > b) {
  //     return a;
  //   } else if (b > c) {
  //     return b;
  //   } else if (c > a) {
  //     return c;
  //   }
  if (a && b && c) {
    return Math.max(a, b, c);
  } else {
    throw "ERROR: all inputs must have a value";
  }
};

// console.log(getLargest(3, 6, 1));

const getSmallest = (a, b, c) => {
  return Math.min(a, b, c);
};

// Export the function so it's available to other files
// Export one function -->
// module.exports = getLargest;

// Exports multi functions -->
module.exports = {
  getLargest,
  getSmallest,
};
