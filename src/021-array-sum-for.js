
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^
//               0  1   2  3 …

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
