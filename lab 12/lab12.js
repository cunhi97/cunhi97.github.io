"use strict";
//Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]

var Julia = [3, 5, 2, 12, 7];
var Kate = [4, 1, 15, 8, 3];

var newJulia = Julia.slice(1, 4); // đưa tham số từ mảng khác vào mảng vừa tạo với tham số tùy chọn
console.log(newJulia);

// const checkDog = Julia.filter((checkDogs) => checkDogs > 5);
// console.log(checkDog);

// function checkDogs(DogJulia, DogKate) {
//   return DogJulia, DogKate >= 3;
// }
var thedog = newJulia.concat(Kate); // concat gọp 2 mảng thành 1
console.log(thedog);
thedog.forEach(function (con, i, arr) {
  // forEach thực thi một hàm nào đó trên từng phần tử của mảng
  if (con >= 3) {
    console.log(`Dog number ${i + 1} is an adult, and is ${con} years old`);
  } else {
    console.log(`Dog number ${i + 1} is still a puppy`);
  }
});

/// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]
var Julia = [9, 16, 6, 8, 3];
var Kate = [10, 5, 6, 1, 4];

var newJulia = Julia.slice(1, 4);
console.log(newJulia);

// function checkDogs(DogJulia, DogKate) {
//   return DogJulia, DogKate >= 3;
// }
var concat = newJulia.concat(Kate);
console.log(concat);
concat.forEach(function (con, i, arr) {
  if (con >= 3) {
    console.log(`Dog number ${i + 1} is an adult, and is ${con} years old`);
  } else {
    console.log(`Dog number ${i + 1} is still a puppy`);
  }
});

//////////////////////////////////////////

//// LAB 12.2
////Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
var dogAge = [5, 2, 4, 1, 15, 8, 3, 0.1];
function calcAverageHumanAge(dogAge) {
  let humanAge = dogAge.map(function (dog) {
    if (dog <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(humanAge);
  var age18 = humanAge.filter((humanAge) => humanAge > 18);
  console.log(age18);
  const sum = humanAge.reduce((partialSum, a) => partialSum + a, 0);
  const avg = sum / humanAge.length;
  console.log(sum);
  console.log(avg);
}
calcAverageHumanAge(dogAge);

////////////////////////////////////////////////////
//Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
var dogAge1 = [16, 6, 10, 5, 6, 1, 4];
function calcAverageHumanAge(dogAge1) {
  let humanAge = dogAge1.map(function (dog) {
    if (dog <= 2) return 2 * dog;
    else return Math.abs(16 + 4 * dog);
  });
  console.log(humanAge);
  var age18 = humanAge.filter((humanAge) => humanAge > 18);
  console.log(age18);
  const sum = humanAge.reduce((partialSum, a) => partialSum + a, 0);
  const avg = sum / humanAge.length;
  console.log(sum);
  console.log(avg);
}
calcAverageHumanAge(dogAge1);

("====================================================");
console.log("lab 12.3");
////Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]

function calcAverageHumanAge2(dogAge) {
  return (
    dogAge
      .map((dogAges) => (dogAges <= 2 ? 2 * dogAges : 16 + dogAges * 4))
      .filter((dogAges) => dogAges >= 18)
      .reduce((dogAges, dogAgetext) => dogAges + dogAgetext, 0) /
    dogAge //.leght
      //tính độ dài của mảng
      .map((dogAges) => (dogAges <= 2 ? 2 * dogAges : 16 + dogAges * 4))
      .filter((dogAges) => dogAges >= 18).length
  ).toFixed(2);
}
console.log(dogAge);
// dữ liệu 1
calcAverageHumanAge2(dogAge);
console.log(calcAverageHumanAge2(dogAge));
// dữ liệu 2
calcAverageHumanAge2(dogAge1);
console.log(calcAverageHumanAge2(dogAge1));
