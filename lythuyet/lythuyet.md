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
