
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^
//               0  1   2  3 …

const sum = (
  numbers[0] +
  numbers[1] +
  numbers[2] +
  numbers[3] +
  numbers[4] +
  numbers[5] +
  numbers[6]
);

console.log(sum);
