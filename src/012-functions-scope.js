
const foo = 'Hello';

function doSomething(bar) {

  function doSomethingElse(baz) {
    console.log(`${foo} ${bar} ${baz}`);
  }

  doSomethingElse('!');

}

doSomething('World');
