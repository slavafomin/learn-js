
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^
//               0  1   2  3 …

let sum = 0;
for (const value of numbers) {
  sum += value;
}

console.log(sum);


/**
 * BAD: DO NOT USE
 */
numbers.forEach(value => {
  sum += value;
});
