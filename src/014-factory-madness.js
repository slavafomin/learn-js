
const ten = useValue(10);
const fifteen = useValue(15);

const mySum = useSum(ten, fifteen);

console.log(
  ten(),
  fifteen(),
  mySum(),
);


function useValue(value) {
  return () => value;
}

function useSum(value1, value2) {
  return () => value1() + value2();
}
