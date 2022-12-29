const country = "Việt Nam";
console.log(country);
const continent = "Đông Nam Á";
console.log(continent);
const population = "99000000";
console.log(population);

// PHẦN TOÁN TỬ
const row = 2022;
const agenhi = 2022 - 1997;
const agecon = 2022 - 2012;
console.log(agenhi, agecon);
console.log(agenhi * 2, agenhi / 10, 2 ** 3);

const firstname = "Nhi";
const lastname = "Duongkhanh";
console.log(firstname + " " + lastname);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(agenhi > agecon);
console.log(agenhi < agecon);
console.log(agecon >= 10);
console.log(agecon >= 20);
console.log(agecon <= 20);
console.log(agecon <= 9);

const isFullAge = agecon >= 10;

console.log(row - 1997 >= row - 2012);

// LAB 2

const islaland = "ĐẢO PHÚ QUỐC";
const contry = "vietnam";
const language = "Vietnamese";
const age = 25;
console.log(age);
const height = 1.65;
console.log(height);
const yearBirth = 1997;
console.log(yearBirth);

if (islaland == contry) {
  console.log("vùng hoàn đảo của việt nam");
} else {
  islaland == language;
  console.log("không thuộc hoàn đảo");
}

// lab 2.3

const trungquoc = population / 2;
console.log(population / 2);
const trieutien = 45000000 + 1;
console.log(45000000 + 1);
console.log("trung quốc, triều tiên");
const phanlan = 6000000;
console.log(population > phanlan);
console.log(population < phanlan);
const dansotrungbinh = 33000000;
console.log(population > dansotrungbinh);
console.log(population < dansotrungbinh);

const description =
  country +
  " " +
  "and its" +
  " " +
  population +
  " " +
  "million people speak" +
  " " +
  language;
console.log(description);
const descriptionnew = `${country} and its ${population} million people speak ${language}`;
console.log(descriptionnew);

if (population > dansotrungbinh) {
  console.log("country's population is 66 milion above average");
  console.log(typeof population);
} else {
  population < dansotrungbinh;
  console.log("'country's population is 33 - population million below average");
  console.log(typeof population);
}

// LAB 2.6 BÀI TOÁN TỔNG HỢP

// Mark và John
// Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
// Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
// BMI = mass/[(height)^2)] = mass/(height*height)

//DỮ LIỆU 1
// Mark
var massmark1 = 78;
var heighmark1 = 1.69;
//John
var massjohn1 = 92;
var heightjohn1 = 1.95;
BMI1 = massmark1 / [heighmark1 ** 2];
console.log(BMI1);
BMI1 = massmark1 / (heighmark1 * heighmark1);
console.log(BMI1);
BMI2 = massjohn1 / [heightjohn1 ** 2];
console.log(BMI2);
BMI2 = massjohn1 / (heightjohn1 * heightjohn1);
console.log(BMI2);
var markHigherBMI = "kết quả";
console.log(BMI1 > BMI2);
console.log(BMI1 < BMI2);
if (BMI1 > BMI2) {
  console.log("Mark's BMI is higher than John's!");
} else {
  BMI1 < BMI2;
  console.log("John's BMI is higher than Mark's!");
}
if (BMI1 > BMI2) {
  console.log(` Mark's BMI (${BMI1}) is higher than John's (${BMI2})!`);
} else {
  BMI1 < BMI2;
  console.log(`John's BMI (${BMI2})  is higher than Mark's (${BMI1})!`);
}

//DỮ LIỆU 2
var massmark2 = 95;
var heighmark2 = 1.88;
//John
var massjohn2 = 85;
var heightjohn2 = 1.76;
BMI3 = massmark2 / [heighmark2 ** 2];
console.log(BMI3);
BMI3 = massmark2 / (heighmark2 * heighmark2);
console.log(BMI3);
BMI4 = massjohn2 / [heightjohn2 ** 2];
console.log(BMI4);
BMI4 = massjohn2 / (heightjohn2 * heightjohn2);
console.log(BMI4);
var markHigherBMI = "kết quả";
console.log(BMI3 > BMI4);
console.log(BMI3 < BMI4);
if (BMI3 > BMI4) {
  console.log("Mark's BMI is higher than John's!");
} else {
  BMI3 < BMI4;
  console.log("John's BMI is higher than Mark's!");
}
if (BMI3 > BMI4) {
  console.log(` Mark's BMI (${BMI3}) is higher than John's (${BMI4})!`);
} else {
  BMI3 < BMI4;
  console.log(`John's BMI (${BMI4})  is higher than Mark's (${BMI3})!`);
}

const valueNumber = "123";

const valueString = Number(valueNumber);
alert(typeof valueString);

class Person {
  constructor(name) {
    this.name = name;
  }
}

let person1 = new Person("John");

console.log(person1.name); // John

const day = "satuday";

switch (day) {
  case "monday":
    console.log("hoc tieng anh");
    console.log("di nha sach");
    break;
  case "tueday":
    console.log("tin hoc");
    break;
  case "wednesday":
    console.log("pho di bo");
    break;
  case "satuday":
  case "sunday":
    console.log("hoc web");
    break;
  default:
    console.log("not index");
}

// hàm(function)
("use strict");
function fruitprocessor(apple, oragen) {
  const juice = `dùng táo với số lượng ${apple} dùng cam với số lượng ${oragen}`;
  return juice;
}
const applejuice = fruitprocessor(5, 0);
console.log(applejuice);
const appleOragenjuice = fruitprocessor(4, 4);
console.log(appleOragenjuice);
console.log(fruitprocessor(4, 4));

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("finland", 6, "helsinki"));
console.log(describeCountry("china", 300, "hongkong"));
console.log(describeCountry("thailand", 50, "bangkok"));

function percentageOfWorld1(countried, population, percent) {
  return `${countried} có ${population} tỷ người chiếm ${percent}% dân số thế giới.`;
}
const percentageOfWorld5 = (population / 7.9) * 100;
console.log(percentageOfWorld1("trung quốc", 1.441, (1.441 / 7.9) * 100));
console.log(percentageOfWorld1("việt nam", 1, (1 / 7.9) * 100));
console.log(percentageOfWorld1("lào", 0.8, (0.8 / 7.9) * 100));

// biểu thức hàm

const calpercent1 = function (population) {
  return (population / 7.9) * 100;
};
const percent1 = calpercent1(1.441);
console.log(
  `Trung Quốc có 1.441 tỷ người, chiếm ${(1.441 / 7.9) * 100}% dân số thế giới`
);

const calpercent2 = function (population) {
  return (population / 7.9) * 100;
};
const percent2 = calpercent2(1);
console.log(
  `Việt Nam có 1.441 tỷ người, chiếm ${(1 / 7.9) * 100}% dân số thế giới`
);

const calpercent3 = function (population) {
  return (population / 7.9) * 100;
};
const percent3 = calpercent3(0.8);
console.log(
  `Lào có 1.441 tỷ người, chiếm ${(0.8 / 7.9) * 100}% dân số thế giới`
);

// LAB 4.3

const calpercent4 = (population) => (population / 7.9) * 100;
const percent4 = calpercent4(1.441);
console.log(`Trung Quốc có 1.441 tỷ người, chiếm ${percent4}% dân số thế giới`);

const calpercent5 = (population) => (population / 7.9) * 100;
const percent5 = calpercent4(1);
console.log(`Việt Nam có 1.441 tỷ người, chiếm ${percent5}% dân số thế giới`);

const calpercent6 = (population) => (population / 7.9) * 100;
const percent6 = calpercent4(0.8);
console.log(`Lào có 1.441 tỷ người, chiếm ${percent6}% dân số thế giới`);

//LAB 4.4 HÀM GỌI HÀM
function describePopulation(_country, _population, _percent) {
  return `${_country} has ${_population} million people, which is about ${_percent}% of the world`;
}
console.log(describePopulation("Trung Quốc", 1.441, (1.441 / 7.9) * 100));
console.log(describePopulation("việt nam", 1, (1 / 7.9) * 100));
console.log(describePopulation("lào", 0.8, (0.8 / 7.9) * 100));

// ARRY

const populations = [1, 2, 3, 4];
console.log(populations);
console.log(populations.includes(1));
console.log(populations.includes(2));
console.log(populations.includes(4));
console.log(populations.includes(5));

percentages = "populations";
percentageOfWorld2 = (populations[1] / 7.9) * 100;
console.log(percentageOfWorld2);

percentageOfWorld3 = (populations[2] / 7.9) * 100;
console.log(percentageOfWorld3);

percentageOfWorld4 = (populations[0] / 7.9) * 100;
console.log(percentageOfWorld4);

percentageOfWorld6 = (populations[3] / 7.9) * 100;
console.log(percentageOfWorld6);

// LAB 4.6 CÁC PHÉP TOÁN CƠ BẢN CỦA ARRY

const neighbours = ["canada", "mexico", "Đại Tây Dương"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (neighbours.includes("Germany")) {
  console.log("Probably a central European country :D");
} else {
  neighbours.includes("Germany");
  console.log("Probably not a central European country :D");
}

neighbours[1] = "Sweden";
console.log(neighbours);
console.log(`Republic of Sweden`);

//LAB 4.7.1 ĐỘI NÀO CHIẾN THẮNG

const calcAverage = (a, b, c) => (a + b + c) / 3;
//'avgDolphins' và 'avgKoalas'
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Koalas win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No team win ...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(600, 200);

// dữ liệu 2

scoreDolphinss = calcAverage(85, 54, 41);
scoreKoalass = calcAverage(23, 34, 27);
console.log(scoreDolphinss, scoreKoalass);
checkWinner(scoreDolphinss, scoreKoalass);

//Lab 4.7.2. Xây dựng Tip calculator (phần 2)

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//const bills = [125, 555, 44];
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//console.log(bills, tips, total);

let sum = 0;
for (let i = 2; i <= 6; i++) {
  sum = sum + i;
}
console.log(sum);

// LAB 5.1-5.7

const myCountry = {
  country: "finland",
  capital: "helsinki",
  language: "finnish",
  populations: 6,
  neighbour: ["canada", "mexico", "Đại Tây Dương"],
  describe: function () {
    console.log(
      `${this.country} has ${this.populations} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbour.length === 0 ? true : false;
  },
};

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

//Lab 5.5. Lặp trong array, break và continue

const populationsss = [1, 2, 3, 4];
console.log(populationsss);
console.log(populationsss.includes(1));
console.log(populationsss.includes(2));
console.log(populationsss.includes(4));
console.log(populationsss.includes(5));

percentages2 = populationsss;
percentageOfWorld2 = (populationsss[1] / 7.9) * 100;
console.log(percentageOfWorld2);

percentageOfWorld3 = (populationsss[2] / 7.9) * 100;
console.log(percentageOfWorld3);

percentageOfWorld6 = (populationsss[3] / 7.9) * 100;
console.log(percentageOfWorld6);

percentageOfWorld4 = (populationsss[0] / 7.9) * 100;
console.log(percentageOfWorld4);

//percentageOfWorld6 = (populationsss[3] / 7.9)* 100;
//console.log(percentageOfWorld6);

//let populationsss = 0;
for (let i = 0; i <= populationsss.length; i++) {
  if (i === percentageOfWorld2) break;
  console.log(populationsss[i]);
}

for (i = 0; i <= populationsss.length; i++) {
  if (i == !percentageOfWorld2) continue;
  console.log(populationsss[i]);
}

//Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const Canada = "Hoa Kỳ";
const Mexico = "Mỹ";
const Russia = "Na Uy";

//   for(a = 0 ; a < listOfNeighbours.length - 1; a--){
//   console.log(listOfNeighbours[a])

//     for(b = 0; b <= Russia.length -1; b--){
//       console.log(listOfNeighbours[Russia[b]])
//       for(c = 0; c <= Mexico.length - 1; c--)
//       console.log(listOfNeighbours[Mexico[c]])
//       for(d = 0; d = Canada; d--)
//       console.log(listOfNeighbours[Canada[d]])
//     }
//   }

//LAB 5.7 VONG LAP WHILE

percentages3 = populationsss;

let e = 1;

while (e <= populationsss.length) {
  console.log(populationsss[e]);
  e++;
}

const BMIMARK = {
  "full name": "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / [this.height ** 2];
  },
};

console.log(BMIMARK.calcBMI());

const BMIJohn = {
  "full name": "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / [this.height ** 2];
  },
};

console.log(BMIJohn.calcBMI());

if (BMIMARK.calcBMI() > BMIJohn.calcBMI()) {
  console.log(
    `Mark's BMI (${BMIMARK.calcBMI()}) is higher than John's (${BMIJohn.calcBMI()})`
  );
} else {
  BMIMARK.calcBMI() < BMIJohn.calcBMI();
  console.log(
    `John's BMI (${BMIJohn.calcBMI()}) is higher than Mark's (${BMIMARK.calcBMI()})!`
  );
}

//Lab 5.8.2. Cải thiện Tip calculator

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < billss.length; i++) {
  tips.push(calcTip(billss[i]));
  total.push(billss[i] + tips[i]);
}
console.log(tips, total);
//'calcAverage' nhận array 'arr' làm đối số

const calcAveragel = function () {
  sum = 0;
  for (let i = 0; i < billss.length; i++) {
    sum += billss[i];
    console.log(billss[i]);
  }
  return sum / billss.length;
};
console.log(calcAverage(billss));

//Lab 6. Xử lý chuỗi
// const printForecast = function (arr) {
//   console.log(
//     `${arr}ºC in ${date[0]} day ... ${arr}ºC in ${date[1]} days ... ${arr}ºC in ${date[2]} days ... `
//   );
// };
//DỮ LIỆU 1

var date = [1, 2, 3, 4, 5];
const printForecast = function () {
  i = 0;
  for (let i = 1; i < date.length; i++) {
    console.log(
      `${printForecast[0]}ºC in ${i} day ... ${printForecast[1]}
      )}
    
    ºC in ${i} days ... ${printForecast[2]}ºC in ${i}
     days ... `
    );
  }
};
let arrayInput = [17, 21, 23];
printForecast(arrayInput);

//console.log(printForecast(arr));
//Dữ liệu 2 [12, 5, -5, 0, 4]

printForecast([12, 5, -5, 0, 4]);

//DÙNG VÒNG LẶP

//Lab 6. Xử lý chuỗi
// CÁCH 2

const printForecasted = (arr) => {
  res = "";
  for (i in arr) {
    res += `${arr[i]} in (Number)(i) days...`;
  }
  console.log(res);
};
printForecasted([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
