let a = +prompt('Triangle first length?');
let b = +prompt('Triangle second length?');
let c = +prompt('Triangle third length?');

if (a + b < c || a + c < b || c + b < a) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a === c) {
  console.log('Eequivalent triangle');
} else if (a === b && b === c || a === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}