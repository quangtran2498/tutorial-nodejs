var bar = 'foo';
console.log(bar) // prints 'foo'

function myFunction() {
  var bar = 'baz';
  console.log(bar);
}
myFunction(); // prints 'baz'
console.log(bar) // prints 'foo'