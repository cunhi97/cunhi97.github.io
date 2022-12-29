"use strict";
// const day = Date();
// const year = 2022;
// console.log(day, year);
// const data = function (day, year) {
//   return `${day} and ${year}`;
// };
// //data(day, year);
// console.log(data(day, year));

// const myclass = function (days, years) {
//   this.days = days;
//   this.years = years;
// };
// const ex_1 = new myclass(day, year);
// console.log(ex_1);

const Cars = function (maked, speedd) {
  this.maked = maked;
  this.speedd = speedd;
};

Cars.prototype.accelerated = function () {
  this.speedd += 10;
  console.log(`tăng tốc độ của ô tô lên ${this.speedd}km/h`);
};
Cars.prototype.braked = function () {
  this.speedd -= 5;
  console.log(`giảm tốc độ của ô tô ${this.speedd}km/h`);
};

const car11 = new Cars("BMW", 120);
car11.accelerated();
car11.braked();

const car12 = new Cars("Mercedes", 95);
car12.accelerated();
car12.braked();

// lab 13.2
class CarCl123 {
  constructor(maked, speedd) {
    this.maked = maked;
    this.speedd = speedd;
  }
  get speedUS() {
    return this.speedd / 1.6;
  }
  set speedUS(speedd) {
    this.speedd = speedd * 1.6;
  }
  accelerated() {
    this.speedd += 10;
    this.speedd /= 1.6;
    console.log(`tốc độ hiện tại ${this.speedd}`);
  }
  braked() {
    this.speed--;
    console.log(`tốc độ hiện tại ${this.speedd}`);
  }
}

const car111 = new CarCl123("BMW", 120);
car111.accelerated();
console.log(car111);

car111.braked();
car111.accelerated();
