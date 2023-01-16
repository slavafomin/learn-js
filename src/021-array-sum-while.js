
const numbers = [1, 2, 31, 4, 5, 60, 700]; // sum: 803
//               ^  ^   ^  ^         ^
//               0  1   2  3 …       6

let sum = 0; // 1+2+31+4+5+60+700
whileDo();
console.log(sum);


function whileDo() {
  let i = 0;
  while (i < numbers.length && sum <= 100) {
    sum += numbers[i]; // ^7
    i++;
  }
}

function doWhile() {

  let i = 0;

  do {
    sum += numbers[i]; // ← error when array is empty
    i++;

  } while (i < numbers.length);

}
