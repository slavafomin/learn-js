
// Write a program to find maximum between two numbers using if else.

// Input
//   Input value1: 10
//   Input value2: 20
// Output
//   Maximum = 20

function findMax(value1, value2) {

  if (value1 >= value2) {
    return value1;

  } else {
    return value2;

  }

}

function findMaxTernary(value1, value2) {

  // return (value1 >= value2 ? value1 : value2);

  return (
    (value1 >= value2)
      ? value1
      : value2
  );

}

//

const maxNumber = findMax(10, 20);

console.log(`Max number is: ${maxNumber}`);
