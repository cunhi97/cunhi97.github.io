đối với toán tử ++ --
Khi thực hiện số đầu tiên là 10++ thì console vẫn là 10
đến số thứ 2 mới bắt đầu cộng thêm 1
ví dụ :
let result = 10;
result++;
console.log(result);

let v = result(11) + 5 + result++(11) + 5 + result(12);
console.log(v);
console.log(result);
//kq = 44
==> tương tự với phép trừ

Sự khác nhau giữa biểu thức hàm và khai báo hàm

- với khai báo hàm , mình có thể gọi hàm trước khi chúng ta định nghĩa
- với BIểu thức hàm thì ko được
  ví dụ:

+biểu thức hàm :
\*\*\*myfunction(100, 22);
const myfunction = function (value1, value2) {
console.log(`không gọi được hàm trước khi định nghĩa ${value1}, ${value2}`);
};
//==>>>>Cannot access 'myfunction' before initialization

+khai báo hàm :
\*\*\*myfunction(111, 222);
function myfunction(value1, value2) {
console.log(`gọi được hàm trước khi định nghĩa ${value1}, ${value2}`);
}
//==>>> gọi được hàm trước khi định nghĩa 111, 222

3.khai báo object:
có 2 kiểu :
+attribute.value **_ dùng khi khai báo 1 giá trị
+attribute["value"] _** dùng để khai báo 1 biểu thức// kiểu này thêm dấu chấm sai.

ví dụ :
const object = {
kiểu1: value1,
kiểu2: value2
}

- kiểu 1 :
  console.log(object.kiểu1)
  // value1

- kiểu 2 :
  console.log(object["kiểu1" + i++])

## các phương thước :

push() : thêm phần tử cuối mảng ;
unshift() : thêm phần tử ở đầu mảng ;
pop() : gỡ phần tử khỏi đuôi array;
shift() : gỡ phàn tử khỏi đầu aray;
indexOf() : chỉ ra vị trí của một phần tử trong array;
includes() : xác định phần tử đó có trong mảng không//thường đặt điều kiện để xác định

cấu trúc vòng lặp ngược
const array = [12345]
for(let i = array.lenght - 1; i >= 0 ; i--){
console.log(array[i])
}
======================================

- Cấu trúc dùng function vòng lặp for để thêm nội dung vào chuỗi trống

* đầu tiên tạo function
* tiếp theo tạo một chuỗi trống
  vd: let tênchuỗi = "";
* tiếp theo dùng vòng lặp qua array(array này đc tạo khi gọi hàm )
* sau đó thêm value trong array vào nội dung chuỗi string bên trong console.log: console.log(`chuỗi string`)
* # cuối cùng gọi hàm

### vd: function printForecast1(arr) {

let res = ""; // tạo một chuỗi rỗng;
for (let i = 0; i < arr.length; i++) {
// thêm vào chuỗ rỗng
res += `... ${arr[i]}ºC in ${i + 1} day `;
}
console.log(res);
}
printForecast1([17, 21, 23]);
printForecast1([12, 5, -5, 0, 4]);
=======================================
windown + . ====>> icon kí hiệu số học

Alt + ↓ đưa dòng code xuống dòng

=======================================

### map() : tạo ra một mảng mới dựa trên mảng ban đầu

map(function(element, index, array) {...}, thỉArg)

- # ví dụ:
  const arr = [1,2,3,4];
  //tạo 1 mảng mới
  const newarr = arr.map(function(item){
  return item * item;
  })
  console.log(newarr)
  //newarr = [1*1, 2*2, 3*3,...]

### filter() : gán điều kiện cho mảng

- # ví dụ :
  var age18 = humanAge.filter((humanAge) => humanAge > 18);

### reduce(): thực hiện phép tính cho mảng

- # ví dụ :
  const sum = humanAge.reduce((partialSum, a) => partialSum + a, 0);
  ==>> hàm tính tổng ( lấy ví dụ thôi)
