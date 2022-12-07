'use strict'

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`Tốc độ mới sau khi tăng 10km/h là : ${this.speed}`);
};
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi giảm 5km/h là: ${this.speed}`);
};
//Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h
console.log(`Dữ liệu car 1: BMW đi với tốc độ 120km/h`)

const car1 = new Car('BMW', 120);

car1.accelerate();
car1.brake();
car1.accelerate();

//Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h
console.log(`Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h`);

const car2 = new Car('Mercedes', 95);

car2.accelerate();
car2.brake();

/////////////////////////////////////
//LAB 13.2

class CarCl{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS() {            // trả về giá trị
        return this.speed / 1.6;
    }
    set speedUS(speed) {      // đặt giá trị
        this.speed = speed * 1.6;
    }
    accelerate () {
        this.speed += 10;
        console.log(`Tốc độ mới sau khi tăng 10km/h là : ${this.speed}`);
    }
    brake () {
        this.speed -= 5;
        console.log(`Tốc độ mới sau khi giảm 5km/h là : ${this.speed}`);
    }
}
//Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h

console.log(`Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h`)

const CarCl1 = new CarCl('BMW', 120);


CarCl1.accelerate();
CarCl1.brake();
CarCl1.accelerate();

console.log(CarCl1.speedUS);
CarCl1.speedUS = 84;
console.log(CarCl1)


//Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h

console.log(`Dữ liệu car 2: 'Mercedes' đi với tốc độ 95k`)

const CarCl2 = new CarCl('Mescedes', 95)

CarCl2.accelerate();
CarCl2.brake();
CarCl2.accelerate()

console.log(CarCl2.speedUS)
CarCl2.speedUS = 68;
console.log(CarCl2)


// LAB 13.3 TÍNH KẾ THỪA 

const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.charge = charge;
};
// kế thừ mọi phuong thức và thuộc tính
EV.prototype = Object.create(Car.prototype);

// tạo thêm phương thức mới
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

// ghi đè lại phương thức 
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge --;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

console.dir(EV)

const ev = new EV("Tesla", 120, 23);
ev.chargeBattery(30);
console.log("mức pin sau khi thay đổi : " , ev.charge);

ev.accelerate() // ghi đè phương thức

ev.brake()

//LAB 13.4

class EVCL extends CarCl {
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    accelerate(){
        this.speed += 20;
        this.charge --;
        console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
    }
    get getcharge() {
        return this.#charge

    }
}
const rivian = new EVCL("Rivian", 120, 23);
console.log(rivian);
rivian.chargeBattery(100);
console.log("mức pin sau khi thay đổi :", rivian.getcharge );

rivian.accelerate()// ghi đè
rivian.brake()