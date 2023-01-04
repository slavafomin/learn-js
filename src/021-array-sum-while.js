
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^
//               0  1   2  3 …

let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(sum);
