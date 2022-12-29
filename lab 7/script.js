"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Corect Number!";
console.log(document.querySelector(".message").textContent);
const Guess = document.querySelector(".guess");
const Check = document.querySelector(".check");
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 20;
// math.random() cho các số ngẫu nhiên từ 0 => 1
//math.trunc() làm tròn số thập phân
const secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretnumber;
// Math.trunc ==> làm tròn số
// Math.random() số hiển thị ngẫu nhiên từ 0 -> 1.
// ===> lưu lại và loading lại trang  để thay đổi số ngẫu nhiên.
const displayMessage = function (message) {
  const messages = document.querySelector(".message");
  messages.textContent = message;
  //document.querySelector(".message").textContent = message;
};

Check.addEventListener("click", function () {
  const guess = Number(Guess.value);
  console.log(guess, typeof guess);
  // Khi chưa điền giá trị vào ô
  if (!guess) {
    displayMessage("🤷‍♂️ No Number!");
    // Khi nhập số vào ô = vs con số bí ẩn
  } else if (guess === secretnumber) {
    displayMessage("🎉Correct Number");
    document.querySelector("body").style.backgroundColor = "rgb(20, 155, 20)";
    document.querySelector(".number").style.width = "10rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== highscore) {
    if (score >= 1) {
      displayMessage(guess > secretnumber ? "↑ Too high!" : "↓ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤦‍♂️ You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// }else if(guess > secretnumber){
//     if(score >1){
//         document.querySelector('.message').textContent = "Too high"
//         score--
//         document.querySelector('.score').textContent = score;
//     }else {
//         document.querySelector('.message').textContent = "🤦‍♂️You lost the game"
//         document.querySelector('.score').textContent = 0;

//     }

// }else if(guess < secretnumber){
//     if(score >1){
//         document.querySelector('.message').textContent = "Too low"
//         score--
//         document.querySelector('.score').textContent = score;
//     }else {
//         document.querySelector('.message').textContent = "🤦‍♂️You lost the game"
//         document.querySelector('.score').textContent = 0;

//     }

// }

// }
// )
