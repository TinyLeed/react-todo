// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['jen', 'cory'];
// var groupB = ['vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var personA = ['Andrew', 25];
var personB = ['Mads', 21];
// Hi Andrew, you are 25

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...personA);
greet(...personB);

var names = ['Mike', 'Ben'];
var final = ['Mads', ...names];
// Hi Andrew

final.forEach(function (name) {
  console.log('Hi ' + name);
});
