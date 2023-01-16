
const array = [1, 2, "3", "4", 5, 6, "7", 8, "9"];

function even(el) {
  return el % 2 === 0;
}

// DECLARATIVE
// (FUNCTIONAL PROGRAMMING)

const filteredArr = (array
  .map(el => Number(el))
  .filter(el => even(el)) // [2, 4, 6, 8]
  .filter(el => el > 2)   // [4, 6, 8]
);


// IMPERATIVE

const numbers = [];
for (const value of array) {
  numbers.push(Number(value));
}

const evenNumbers = [];
for (const value of numbers) {
  if (even(value)) {
    evenNumbers.push(value);
  }
}
