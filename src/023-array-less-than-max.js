
const numbers = [1, 2, 31, 4, 5, 60, 700];


console.log(allLessThanMax(numbers, 800));


/**
 * @param {number[]} array
 * @param {number} max
 *
 * @returns boolean
 */
function allLessThanMax(array, max) {
  for (const value of array) {
    if (value >= max) {
      return false;
    }
  }
  return true;
}

/**
 * @param {number[]} array
 * @param {number} max
 *
 * @returns boolean
 */
function allLessThanMaxBreak(array, max) {

  let hasMax = false;

  for (const value of array) {
    if (value >= max) {
      hasMax = true;
      break;
    }
  }

  return !hasMax;

}
