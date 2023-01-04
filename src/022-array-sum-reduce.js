
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^
//               0  1   2  3 …

// @todo DO NOT USE!
const sum = numbers.reduce(
  (acc, value) => acc + value,
  0
);

console.log(sum);
