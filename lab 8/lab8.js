"use strict";

const buttonListNode = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");
const modalfl = document.querySelector(".modal");
// .modal nội dung trong show modal
const overlayfl = document.querySelector(".overlay");

for (let i = 0; i < buttonListNode.length; i++) {
  buttonListNode[i].onclick = function () {
    modalfl.classList.remove("hidden");
    console.log(modalfl);
    // overlayfl.classList.remove("hidden");
    // console.log(overlayfl);
  };
}
btnClose.addEventListener("click", function () {
  modalfl.classList.add("hidden");
  // overlayfl.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e, e.key);

  if (e.key === "Escape" && !modalfl.classList.contains("hidden")) {
    modalfl.classList.add("hidden");
    //overlayfl.classList.add("hidden");
  }
});
