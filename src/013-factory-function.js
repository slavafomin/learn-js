
const tenMultiplier = useMultiplier(10);
const fiftyMultiplier = useMultiplier(50);

console.log(
  multiplyAndSum(5, 15, tenMultiplier)
);


/**
 * Factory function -- функция-фабрика
 */
function useMultiplier(coefficient) {

  return function (value) {

    return (value * coefficient);

  }

}

function multiplyAndSum(value1, value2, multiplier) {
  return multiplier(value1) + multiplier(value2);
}
