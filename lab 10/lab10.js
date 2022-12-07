'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Corect Number!";


// console.log(document.querySelector('.guess').value); 
// document.querySelector('.guess').value = 20;
const secretnumber =Math.trunc(Math.random() * 20) + 1 ;
const btnAgain = document.querySelector('.btn-again');
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretnumber;
const inputGuess = document.querySelector('.guess')
const messageEl = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highscoreEL =  document.querySelector('.highscore')
const numberEl = document.querySelector('.number')
// Math.trunc ==> làm tròn số  
// Math.random() số hiển thị ngẫu nhiên từ 0 -> 1.
// ===> lưu lại và loading lại trang  để thay đổi số ngẫu nhiên.
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess,typeof guess)

// Khi chưa điền giá trị vào ô 
if(!guess){
 displayMessage('🤷‍♂️ No Number!')
// Khi nhập số vào ô = vs con số bí ẩn
}else if(guess === secretnumber){
    displayMessage('🎉Correct Number')
    document.querySelector('body').style.backgroundColor = 'rgb(20, 155, 20)';
    document.querySelector('.number').style.width = '10rem'
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}
else if (guess !== highscore) {
   if (score > 1) {
displayMessage(guess > highscore ? '↑ Too high!' : '↓ Too low!') ;
    score--;
    document.querySelector('.score').textContent = score;
    } else {
        displayMessage('🤦‍♂️ You lost the game');
        document.querySelector('.score').textContent = 0;
    }
}
}
)

btnAgain.addEventListener('click', function () {
    score = 20;
    const secretnumber = parseInt(Math.random() * 20) + 1 ;
   numberEl.textContent = "?";
    inputGuess.value = "";
    messageEl.textContent = "Start Guessing...";
    scoreEl.textContent = "20";
    highscoreEL.textContent = "0";
    document.querySelector('body').style.backgroundColor = "#222";
secretnumber.style.width = "15rem";

})
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