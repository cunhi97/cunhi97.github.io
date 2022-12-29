"use strict";

console.log("lab 15.1 Đọc và hiển thị hình ảnh");
// cài đặt thời gian hiển thị hình ảnh
const wait = function (seconds) {
  // sử dụng Promise để thực hiên gọi lại theo lời hứa để giải quyét giá trị or kết quả của môt lời hứa khác
  // và một cuộc gọi để từ chối lừa hứa
  // resolve : giải quyết
  // reject : từ chối
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    // tạo một thẻ trong html , gán thẻ đó cho 1 biến
    const imgEl = document.createElement("img"); // tạo thẻ để đưa vào js
    // value.atttribute = tham số truyền vào
    imgEl.src = imgPath;
    // Bắt sự kiện load hình ảnh
    imgEl.addEventListener("load", function () {
      // thêm hình ảnh vào các img đc tạo bên trên
      imgEl.classList.add("images");
      // ảnh tải xong đưa imgEl vào DOM
      document.body.appendChild(imgEl); // đưa js vào html
      // gọi hàm resolve khi thành công ===>> trả về kết quả là imgEl
      resolve(imgEl);
    });
    imgEl.addEventListener("error", function () {
      reject(new Error("Đã có lỗi nhé !"));
    });
  });
}

// let currentImg;

// createImage(`./img-1.jpg`)
// .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 1");
//     return wait(2)
// })
// .then(() => {
//     currentImg.style.display = "none";
//     return createImage(`./img-2.jpg`)
// })
// .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 2")
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = "none";
//     return createImage(`./img-3.jpg`)
// })
// .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 3")
//     return wait(2)
// })
// // .then(() => {
// //     currentImg.style.display = "none";
// // })
// .catch((err) => console.error(err)

// )

//Lab 15.2: Hiển thị một tập hợp ảnh

async function loadNPause() {
  try {
    //image 1
    const imgEl1 = await createImage(`./img-1.jpg`);
    await wait(2); // thời gian đợi 2s
    imgEl1.style.display = "none";

    //image 2
    const imgEl2 = await createImage(`./img-2.jpg`);
    await wait(2);
    imgEl2.style.display = "none";

    //image 3
    const imgEl3 = await createImage(`./img-3.jpg`);
    await wait(2);
    imgEl3.style.display = "none";
  } catch (err) {
    console.error(err);
  }
}
loadNPause();

const loadAll = async function (imgArr) {
  try {
    // map() dùng để tạo một mảng mới
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

loadAll(["./img-1.jpg", "./img-2.jpg", "./img-3.jpg"]);

////////////////////////////////////////////////////////////
// giải thích :
// Để hiển thị một tập hợp ảnh trên trên màng hình , ta đưa all ẢNH đó vào một mảng
// 1 Chúng ta gọi hàm
// 2 tạo thẻ img , đưa các thẻ img được tạo vào chung 1 mảng,
// 3.
