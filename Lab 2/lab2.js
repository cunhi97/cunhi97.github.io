"use strict";
// PHẦN TOÁN TỬ
// const row = 2022;
// const agenhi = 2022 - 1997;
// const agecon = 2022 - 2012;
// console.log(agenhi, agecon);
// console.log(agenhi * 2, agenhi / 10, 2 ** 3);

// const firstname = "Nhi";
// const lastname = "Duong khanh";
// console.log(`${lastname} ${firstname}`);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(agenhi > agecon);
// console.log(agenhi < agecon);
// console.log(agecon >= 10);
// console.log(agecon >= 20);
// console.log(agecon <= 20);
// console.log(agecon <= 9);

// const isFullAge = agecon >= 10;

// console.log(row - 1997 >= row - 2012);

// LAB 2/////////////////////////////////////////////
//lab 2.1 - 2.2 =================================
const islaland = "ĐẢO PHÚ QUỐC";
console.log(Boolean("islaland"));
const country = "vietnam";
const language = "Vietnamese";
let population = 1000000;
population++;
console.log(population);
//population++;
console.log(population);
console.log(
  typeof islaland,
  typeof country,
  typeof language,
  typeof population
);
//console.log(typeof (islaland, country, language, population));
// const age = 25;
// console.log(age);
// const height = 1.65;
// console.log(height);
// const yearBirth = 1997;
// console.log(yearBirth);

if (islaland == country) {
  console.log("vùng hoàn đảo của việt nam");
} else {
  islaland == language;
  console.log("không thuộc hoàn đảo");
}

// lab 2.3=======================================

const trungquoc = population;
console.log(trungquoc);
const trieutien = population / 2;
console.log(trieutien);
console.log(population);
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
// const description1 = console.log(
//   `${country} and its ${population} million people speak ${language}`
// );
//console.log(description);

const descriptionnew = `${country} and its ${population} million people speak ${language}`;
console.log(descriptionnew);
//lab 2.5 ================================================
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
let BMI1 = massmark1 / [heighmark1 ** 2];
console.log(BMI1);
BMI1 = massmark1 / (heighmark1 * heighmark1);
console.log(BMI1);
let BMI2 = massjohn1 / [heightjohn1 ** 2];
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
let BMI3 = massmark2 / [heighmark2 ** 2];
console.log(BMI3);
BMI3 = massmark2 / (heighmark2 * heighmark2);
console.log(BMI3);
let BMI4 = massjohn2 / [heightjohn2 ** 2];
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
