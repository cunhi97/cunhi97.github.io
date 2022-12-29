// hàm(function)
"use strict";
function fruitprocessor(apple, oragen) {
  const juice = `dùng táo với số lượng ${apple} dùng cam với số lượng ${oragen}`;
  return juice;
}
const applejuice = fruitprocessor(5, 0);
console.log(applejuice);
const appleOragenjuice = fruitprocessor(4, 4);
console.log(appleOragenjuice);
console.log(fruitprocessor(4, 4));

console.log("=====================================================");

console.log("lab 4.1 hàm");
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("finland", 6, "helsinki"));
console.log(describeCountry("china", 300, "hongkong"));
console.log(describeCountry("thailand", 50, "bangkok"));
console.log("khai báo hàm với biểu thức hàm");
// khai báo hàm
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const trungquoc = percentageOfWorld1(1441);
const vietnam = percentageOfWorld1(900);
const lao = percentageOfWorld1(500);
console.log(trungquoc, vietnam, lao);
// biểu thức hàm
var percentageOfWorld2 = function (population) {
  return (population / 7.9) * 100;
};
const campuchia = percentageOfWorld2(0.7).toFixed(2);
const nhatban = percentageOfWorld2(1.1).toFixed(2);
const my = percentageOfWorld2(1.2).toFixed(2);
console.log(campuchia, nhatban, my);

console.log("======================================================");

console.log("lab 4.3 hàm mũi tên");
var percentageOfWorld3 = (population) => (population / 7.9) * 100;
const campuchia1 = percentageOfWorld3(0.7).toFixed(2);
const nhatban1 = percentageOfWorld3(1.1).toFixed(2);
const my1 = percentageOfWorld3(1.2).toFixed(2);
console.log(campuchia1, nhatban1, my1);

console.log("===================================================");

console.log("lab 4.4 Hàm gọi hàm");
function describePopulation(_country, _population, _percent) {
  return `${_country} has ${_population} million people, which is about ${_percent}% of the world`;
}
console.log(describePopulation("Trung Quốc", 1.441, percentageOfWorld1(1.441)));
console.log(describePopulation("việt nam", 1, percentageOfWorld1(1)));
console.log(describePopulation("lào", 0.8, percentageOfWorld1(0.7)));

console.log("===================================================");
// ARRY
const populations = [1, 2, 3, 4];
console.log(populations);
console.log(populations.includes(1)); //xác định trong mảng có chứa giá trị đó hay kô
console.log(populations.includes(2));
console.log(populations.includes(4));
console.log(populations.includes(5));

//const percentages = populations;
var percentage = percentageOfWorld1(populations[0]);
console.log(percentage.toFixed(2));

var percentage = percentageOfWorld1(populations[1]);
console.log(percentage.toFixed(2));

var percentage = percentageOfWorld1(populations[2]);
console.log(percentage.toFixed(2));

var percentage = percentageOfWorld1(populations[3]);
console.log(percentage.toFixed(2));

console.log("===================================================");

console.log("LAB 4.6 CÁC PHÉP TOÁN CƠ BẢN CỦA ARRY");
const neighbours = ["canada", "mexico", "Đại Tây Dương"];

neighbours.push("Utopia"); // push thêm phần tử ở cuối array
console.log(neighbours);
neighbours.pop("Utopia"); // pop giảm phần tử ở cuối array
console.log(neighbours);
if (neighbours.includes("Germany")) {
  console.log("Probably a central European country :D");
} else {
  console.log("Probably not a central European country :D");
}
neighbours[1] = "Sweden";
console.log(neighbours);
if (neighbours.includes("Sweden")) {
  neighbours.indexOf("Sweden"); // indexOf dùng để xác định vị trí phần tử có trong mảng
  console.log(neighbours.indexOf("Sweden"));
  neighbours[1] = "Republic of Swenden";
  console.log(neighbours);
}

//LAB 4.7.1 ĐỘI NÀO CHIẾN THẮNG

const calcAverage = (a, b, c) => (a + b + c) / 3;
//'avgDolphins' và 'avgKoalas'
var avgDolphins = calcAverage(44, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgDolphins <= avgKoalas * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No team win ...");
  }
};
checkWinner(avgDolphins, avgKoalas);
//checkWinner();

// dữ liệu 2

var avgDolphins = calcAverage(85, 54, 41);
var avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

//Lab 4.7.2. Xây dựng Tip calculator (phần 2)

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);
