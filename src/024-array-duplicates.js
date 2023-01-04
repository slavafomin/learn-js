
// Write a program to count a total number of duplicate
// elements in an array.

const numbers = [1, 2, 1, 3, 4, 4, 5, 6, 2, 1];

// D=[],        1 => [2, 1, 3, 4, 4, 5, 6, 2, 1] +2
// D=[1],       2 => [1, 3, 4, 4, 5, 6, 2, 1]    +1
// D=[1, 2],    1 => …
// D=[1, 2],    3 => [4, 4, 5, 6, 2, 1] +0
// D=[1, 2, 3], 4 => [4, 5, 6, 2, 1] +1


console.log(countDuplicates(numbers));


/**
 * @param {number[]} array
 *
 * @returns number
 */
function countDuplicates(array) {

  const duplicates = [];

  let count = 0;

  for (let i = 0; i < array.length; i++) {

    if (duplicates.includes(array[i])) {
      continue;
    }

    let isDuplicate = false;

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
        isDuplicate = true;
      }
    }

    if (isDuplicate) {
      count++;
    }

    duplicates.push(array[i]);

  }

  return count;

}
