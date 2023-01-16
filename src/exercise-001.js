
const greeter = useGreeter('Hello');

console.log(greeter('Bob'));
console.log(greeter('Alice'));


function useGreeter(greeting) {

  return userName => (greeting + ', ' + userName + '!');

}
