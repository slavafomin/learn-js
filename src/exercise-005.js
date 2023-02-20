
/**
 * Exercise #5
 * Write a program to multiple two matrices.
 */

// const matrix1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
//
// const matrix2 = [
//   [9, 8],
//   [6, 5],
//   [3, 2],
// ];

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const resultMatrix = [];

const rowsLength = matrix1.length;
const colsLength = matrix2[0].length;

if (rowsLength !== colsLength) {
  throw new Error(`Incorrect matrix size`);
}

for (const row of matrix1) {

  const resultRow = [];

  for (let c = 0; c < colsLength; c++) {

    const column = getColumn(matrix2, c);

    resultRow.push(multiplyVectors(row, column));

  }

  resultMatrix.push(resultRow);

}

resultMatrix.forEach(row => console.log(row));


/**
 * @param {number[][]} matrix
 * @param {number} columnIndex
 */
function getColumn(matrix, columnIndex) {
  const column = [];
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][columnIndex]);
  }
  return column;
}


/**
 * @param {number[]} vector1
 * @param {number[]} vector2
 *
 * @returns {number}
 */
function multiplyVectors(vector1, vector2) {
  if (vector1.length !== vector2.length) {
    throw new Error(`Incorrect vector size`);
  }
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
