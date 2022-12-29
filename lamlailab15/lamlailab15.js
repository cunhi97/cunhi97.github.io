"use strict";
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    console.log(imgEl);
    imgEl.src = imgPath;
    imgEl.addEventListener("load", function () {
      imgEl.classList.add("images");
      document.body.appendChild(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener("error", function () {
      reject(new Error("đã xả ra lỗi nhé!🤦‍♂️"));
    });
  });
}
async function loadNPause() {
  try {
    const imgEl1 = await createImage("./img-1.jpg");
    await wait(2);
    imgEl1.style.display = "none";

    const imgEl2 = await createImage("./img-2.jpg");
    await wait(2);
    imgEl2.style.display = "none";

    const imgEl3 = await createImage("./img-3.jpg");
    await wait(2);
    imgEl3.style.display = "none";
  } catch (err) {
    console.error(err);
  }
}
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["./img-1.jpg", "./img-2.jpg", "./img-3.jpg"]);
