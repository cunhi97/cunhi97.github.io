// "use strict";
// function greeting(name) {
//   alert(`Hello, ${name}`);
//   console.log(greeting.name);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   console.log(name);
//   callback(name);
//   console.log(callback(name));
// }

// processUserInput(greeting);
let x = 10;
let y = 20;
let sum = (sum) => sum + sum;
console.log(sum);
console.log(sum(x + y));

const showYear = function (birday) {
  const age = 2022 - birday;
  return age;
  // return không in ra console
};
showYear(1997);

/////////////\\\\\\\\\\\\\\\\\
//kiểm tra ++ --
let result = 10;
result++;
console.log(result);

let v = result + 5 + result++ + 5 + result;
console.log(v);
console.log(result);

/////////////////////////////////
//sự khác biệt giữa biểu thức hàm và khai báo hàm
//biểu thức hàm :
// myfunction(100, 22);
// const myfunction = function (value1, value2) {
//   console.log(`không gọi được hàm trước khi định nghĩa ${value1}, ${value2}`);
// };
//==>>>>Cannot access 'myfunction' before initialization
// khai báo hàm
myfunction(111, 222);
function myfunction(value1, value2) {
  console.log(`gọi được hàm trước khi định nghĩa ${value1}, ${value2}`);
}
//==>>> gọi được hàm trước khi định nghĩa 111, 222
const arr = [1, 2, 3, 4];
arr[0] = 5;
console.log(arr);

function myfunction(cunhi97) {
  const cunhi = cunhi97;
  console.log(cunhi);
  return cunhi;
}
myfunction(1997);
function galo() {
  const cunhi = cute;
  return cunhi;
}

const diemso = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// tính tổng diemso
// hiển thị điẻm số

let sum1 = 0;
for (let i = 0; i < diemso.length; i++) {
  sum1 += diemso[i];
  console.log(sum1);
}
console.log(sum1);
for (let j = 0; j < diemso.length; j++) {
  console.log(`show điểm số ${j + 1}: ${diemso[j]} `);
}
const population = 22;
console.log;
console.log(population);

const arr1 = [1, 2, 3, 4, 5, 6];
for (let a = 0; a < arr1.length; a++) {
  function myfunc(array) {
    return (array / 2) * 100;
  }
  myfunc(arr1);
}
console.log(myfunc(arr1[2]));

//////////////////////////////////////
