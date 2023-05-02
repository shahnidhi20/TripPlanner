//array methods

//

let arr = ["a", "b", "c", "d", "e"];

//slice -- extract part of array without changing the orginal array
console.log(arr.slice(1, 4));
//length = end - start

console.log(arr.slice(-2)); //last two elements

console.log(arr.slice(1, -3));

//shalllow copy of the arry
console.log(arr.slice());

//spread op
var x,
  _ = [...arr];
console.log(x);
//console.log([...arr]);

//Splice
//same as slice but changes the original array
// console.log(arr.splice(2));
// console.log(arr); //splice deleted the other elements from 2 to end

//delete one or more elements using splice

console.log(arr.splice(-1)); //deletes the last element
//2 ==> unmber of elements to delete
arr.splice(1, 2); //removed from postion 1 and removed 2 elements
console.log(arr);

//reversse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse()); //mutates the original array
console.log(arr2);

const letters = arr.concat(arr2); //doesnot mutate the original array
console.log(letters);

console.log([...arr, ...arr2]);

//JOIN

console.log(letters.join("-"));

//new at method
const newarr = [23, 11, 64];

console.log(newarr.at(0)); // same as newarr[0]

//last element of arr
console.log(newarr[newarr.length - 1]);
console.log(newarr.slice(-1)[0]);
console.log(newarr.at(-1));

//at also works on strings
console.log("nidhi".at(-1));

//forof
console.log("----------for of -----------");
var movements = [200, 450, 460, -567, 30, -200];

for (var movement of movements) {
  if (movement > 0) {
    console.log(`You Deposied ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}

console.log("----------forEach -----------");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposied ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
});

console.log("----------forof with index-----------");

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposied ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${movement}`);
  }
}

console.log("----------forEach with index-----------");
//continue and break is not supported in forEach
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposied ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//maps and sets

const curreinces = new Map([
  ["USD", "United stated dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
