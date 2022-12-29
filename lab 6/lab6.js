//DÙNG VÒNG LẶP

//Lab 6. Xử lý chuỗi
//cách 1
//dữ liệu 1
//var arr = [17, 21, 23];
function printForecast1(arr) {
  let res = ""; // tạo một chuỗi rỗng;
  for (let i = 0; i < arr.length; i++) {
    // thêm vào chuỗ rỗng
    res += `... ${arr[i]}ºC in ${i + 1} day `;
  }
  console.log(res);
}
printForecast1([17, 21, 23]);
printForecast1([12, 5, -5, 0, 4]);

console.log("==============================================");

// CÁCH 2
const printForecast = (arr) => {
  res = "";

  for (i in arr) {
    res += `...${arr[i]}℃ in ${Number(i) + 1} days...`;
  }
  console.log(res);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
