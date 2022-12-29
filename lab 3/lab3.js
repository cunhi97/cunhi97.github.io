"use strict";
//lab3.1==========================================================
let sn = "9" - "5";
console.log(sn);
let ia = "19" - "13" + 17;
// chuỗi phép từ đc thực hiện
// chuỗi không thực hiện phép tính cho phép cộng
console.log(ia);
let ia1 = "19" - "13" + "17";
console.log(ia1);
let sosanh = "123" < 57;
console.log(sosanh);
// chuỗi không  so sánh được với number.
let sotunhien = 5 + 6 - "4" + 9 - 4 - 2;
console.log(sotunhien);
/////////////////////////////////////////////////
//lab3.2 toán tử == với ===
// let numNeighbours = Number(
//   prompt("How many neighbor countries does your country have?")
// );
// phương thức prompt() yêu cầu ta trả lời vào câu thông báo , nếu không điền hiện giá trị là null
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// }
// if (numNeighbours > 1 && numNeighbours < 6) {
//   console.log("More than 1 border");
// } else {
//   numNeighbours < 1 && numNeighbours > 6;
//   console.log("No borders");
// }
// vì== mag ý nghĩa tương đối nên khi dùng == thì kq hiển thị 2 kq mag tíng tương đối
// khi ta dùng === thì kq tuyệt đối cho ta 1 kq tuyệt đối
// khi chuyển sang number thì code vẫn hoạt động bình thường
//==> cho thấy == và === đều thực hiện trên cả string và number và
// nên sử dụng === để đưa ra kq tuyệt đối hay cho ta 1 giá trị để không nhầm lẫn về sau
///////////////////////////////////////////////////

// lab 3.3 toán tử logic

// const islalands = prompt("Have there are islaland ?");
// //const contry = prompt("vietnam");
// const languages = prompt("Language pepeole used to here ? ");
// const populationed = prompt("how many population in here ? ");

// if (islalands == 1) {
//   console.log("here haven't đảo quốc");
// } else {
//   console.log("here is đảo quốc");
// }

// if (languages == 1) {
//   console.log("they are used to language is English");
// } else {
//   console.log("they are not used to language is English");
// }

// if (populationed == 1) {
//   console.log("population less 45000000 person!");
// } else {
//   console.log("population more than 45000000 person! ");
// }
// if ((islalands, languages, populationed == 1)) {
//   console.log("You should live in Portugal :)");
// } else {
//   ("Portugal does not meet your criteria :(");
// }

///////////////////////////////////////////////

//Lab 3.4. Câu lệnh switch (5 phút)
// đặt một  biến , gán giá trị cho biến đó và các case dùng để đối chiếu với giá trị biến đó thực hiện js với biến
let language = "Mandarin";
switch (language) {
  case "chinese":
  case "Mandarin":
    console.log(`${language} :MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`${language} : 2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`${language} : Number 4`);
    break;
  case "Arabic":
    console.log(`${language} 5th most spoken language`);
}

/////////////////////////////////////////
//Lab 3.5. Toán tử điều kiện (ba ngôi) (10 phút)
const populations = 40000000;
populations > 33000000
  ? console.log("Portugal's population is above average")
  : console.log("Portugal's population is below average");
//   Lab 3.6: Bài toán tổng hợp #2
//Lab 3.6.1. Đội nào chiến thắng? (phần 1)
// Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
const Dolphins = (96 + 108 + 89) / 3;
console.log(Dolphins);
const Koalas = (88 + 91 + 110) / 3;
console.log(Koalas);

if (Dolphins > Koalas) {
  console.log("Dolphins win");
} else if (Dolphins == Koalas) {
  console.log("Both win the trophy!");
} else {
  Dolphins < Koalas;
  console.log("Koalas win");
}
//Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
const Dolphins1 = (97 + 112 + 101) / 3;
console.log(Dolphins1);
const Koalas1 = (109 + 95 + 123) / 3;
console.log(Koalas1);

if (Dolphins1 > Koalas1) {
  console.log("Dolphins win");
} else if (Dolphins1 < Koalas1) {
  console.log("Koalas win");
} else {
  Dolphins1 == Koalas1;
  console.log("Both win the trophy!");
}
////Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm
const Dolphins2 = (97 + 112 + 101) / 3;
console.log(Dolphins2);
const Koalas2 = (109 + 95 + 106) / 3;
console.log(Koalas2);
if (Dolphins2 > Koalas2) {
  console.log("Dolphins win");
} else if (Dolphins2 < Koalas2) {
  console.log("Koalas win");
} else {
  Dolphins2 == Koalas2;
  console.log("Both win the trophy!");
}

// dùng function

function myfunction(a, b, c) {
  return (a + b + c) / 3;
}
let x = myfunction(4, 5, 11);
console.log(x);
let Dolphins3 = myfunction(96, 108, 89);
console.log(Dolphins3);

//Lab 3.6.2. Tip calculator (phần 1)
//Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430
let bill = 275;
let tip = 275 * 0.2;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip}, and the total value ${
        bill + tip
      }`
    )
  : console.log(`Sorry ${bill} for you not enough to me take tip!`);
