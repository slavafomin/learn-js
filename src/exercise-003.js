
// Задание №3. Напишите программу, которая умножает все
// положительные цифры из предоставленного массива на 2,
// а отрицательные делит на 2. Затем все отрицательные
// и положительные цифры суммируются отдельно. Необходимо
// вернуть сумму чисел, которая окажется в абсолютном
// значении больше другой.

console.log(
  exercise3(
    [-50, -150, 25, 20]
  )
);


/**
 * @param {number[]} numbers
 *
 * @returns number
 */
function exercise3(numbers) {

  let positiveSum = 0;
  let negativeSum = 0;

  for (const number of numbers) {
    if (number > 0) {
      positiveSum += number;
    } else {
      negativeSum += number;
    }
  }

  positiveSum *= 2;
  negativeSum /= 2;

  return (
    (positiveSum >= Math.abs(negativeSum))
      ? positiveSum
      : negativeSum
  );

}
