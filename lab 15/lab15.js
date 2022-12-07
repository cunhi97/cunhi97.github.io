'use strict'

console.log('lab 15.1 Đọc và hiển thị hình ảnh')
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
function createImage(imgPath) {
    return new Promise(function (resolve, reject) {
        const imgEl = document.createElement ('img');
        imgEl.src = imgPath;
        // Bắt sự kiện load hình ảnh 
        imgEl.addEventListener("load", function() {
            imgEl.classList.add("images");
            // ảnh tải xong đưa imgEl vào DOM
            document.body.appendChild(imgEl)
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
        await wait(2);
        imgEl1.style.display = "none"
        
        //image 2
        const imgEl2 = await createImage(`./img-2.jpg`)
        await wait(2)
        imgEl2.style.display = "none";

        //image 3
        const imgEl3 = await createImage(`./img-3.jpg`)
        await wait(2)
        imgEl3.style.display = "none";

    } catch (err) {
        console.error(err);
    }
}
loadNPause()

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async (img) => await createImage(img));
        const imgEl = await Promise.all(imgs);
        console.log(imgEl);
        imgEl.forEach((img) => img.classList.add("parallel"))
    } catch(err) {
        console.error(err);
    }
}

loadAll(["./img-1.jpg", "./img-2.jpg", "./img-3.jpg"])