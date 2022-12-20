
console.log('Step 1');

// const getHeavyValue = useHeavyFunction(100);

const getHeavyValue = heavyFunction.bind(globalThis, 300);

console.log('Step 2');

if (true) {
  console.log(getHeavyValue());
}

console.log('Step 3');


function useHeavyFunction(value1) {
  return () => heavyFunction(value1);
}

function heavyFunction(value1) {
  console.log('DOING SOME HEAVY COMPUTATION');
  return value1;
}
