let ax = +prompt('Coordinate x first point?');
let ay = +prompt('Coordinate y first point?');
let bx = +prompt('Coordinate x second point?');
let by = +prompt('Coordinate y second point?');
let cx = +prompt('Coordinate x third point?');
let cy = +prompt('Coordinate y third point?');

let mx = (ax + bx) / 2;
let my = (ay + by) / 2;

let result = mx === cx && my === cy;

console.log(result);