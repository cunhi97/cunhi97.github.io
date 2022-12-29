"use strict";
console.log("lab 5.1-5.2 ");
const myCountry = {
  country: "finland",
  capital: "helsinki",
  language: "finnish",
  populations: 6,
  neighbour: ["canada", "mexico", "Đại Tây Dương"],
  /// lab  5.2

  describe: function () {
    console.log(
      `${this.country} has ${this.populations} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbour.length === 0 ? true : false;
  },
};
//myCountry.describe();
//myCountry.checkIsland();
console.log(
  `${myCountry.country} has ${myCountry.populations} million ${myCountry.language}-speaking people, ${myCountry.neighbour} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.populations = myCountry.populations + 2;

console.log(myCountry.populations);

myCountry["populations"] = myCountry["populations"] - 2;

console.log(myCountry["populations"]);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry["capital"]);
console.log(myCountry);

//Lab 5.4. Vòng lặp For

let i = 0;
for (i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
//====================================\\
//Lab 5.5. Lặp trong array, break và continue
const populations = [1, 2, 3, 4];
let percentages2 = [];
console.log(percentages2);
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
percentageOfWorld1(populations);
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]).toFixed(2);
  percentages2.push(percentage);
}
console.log(percentages2);
percentages2.unshift("kaka");
console.log(percentages2);

for (let i = 0; i < percentages2.length; i++) {
  if (percentages2[i] === "string") continue;
  {
    console.log(percentages2[i], typeof percentages2);
  }
}
for (i = 0; i < percentages2.length; i++) {
  if (percentages2[i] == 0.04) break;
  {
    console.log(percentages2[i]);
  }
}
//Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const vd = ["Hoa kỳ :", "mỹ :", "Na-uy :"];
// vòng lặp ngược
for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  console.log(listOfNeighbours[i]);
}
//  vòng lặp trong vòng lặp
for (let i = 0; i < vd.length; i++) {
  console.log(vd[i]);
  for (let i = 0; i < listOfNeighbours.length; i++) {}
  console.log(listOfNeighbours[i]);
}
//LAB 5.7 VONG LAP WHILE

let percentages3 = populations;

let e = 1;

while (e < populations.length) {
  console.log(populations[e]);
  e++;
}

("============================================================");

const BMIMARK = {
  "full name": "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / [this.height ** 2];
  },
};

console.log(BMIMARK.calcBMI().toFixed(1));

const BMIJohn = {
  "full name": "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / [this.height ** 2];
  },
};

console.log(BMIJohn.calcBMI().toFixed(1));

if (BMIMARK.calcBMI() > BMIJohn.calcBMI()) {
  console.log(
    `Mark's BMI (${BMIMARK.calcBMI().toFixed(
      1
    )}) is higher than John's (${BMIJohn.calcBMI().toFixed(1)})`
  );
} else {
  BMIMARK.calcBMI() < BMIJohn.calcBMI();
  console.log(
    `John's BMI (${BMIJohn.calcBMI().toFixed(
      1
    )}) is higher than Mark's (${BMIMARK.calcBMI().toFixed(1)})!`
  );
}

//Lab 5.8.2. Cải thiện Tip calculator
const calcTip = function (billss) {
  return billss >= 50 && billss <= 300 ? billss * 0.15 : billss * 0.2;
};
const tips = [];
console.log(tips);
const total = [];
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(total);
for (let i = 0; i < billss.length; i++) {
  tips.push(calcTip(billss[i]));
  total.push(billss[i] + tips[i]);
}
console.log(tips, total);

//'calcAverage' nhận array 'arr' làm đối số
const calcAveragel = function () {
  let sum = 0;
  for (let i = 0; i < billss.length; i++) {
    sum += billss[i];
  }
  console.log(billss[i]);
  console.log(sum / billss.length);
  return sum / billss.length;
};
console.log(calcAveragel(billss));

console.log("Bonus////////////////////");

// let arr = [22, 33, 44, 55];
// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// calcAverage();
// console.log(calcAverage.arr);
// console.log(arr);
let arr = [22, 33, 44, 55];
function calcAverage() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  console.log(sum / arr.length);
  return sum / arr.length;
}
calcAverage(arr);
