'use scrit'
 const score0El = document.querySelector('#score--0');
 const score1El = document.getElementById('score--1');
 const diceEl = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');



score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

btnRoll.addEventListener('click', function () {
    //đưa con số xúc xắc xuất hiện ngẫu nhiên từ 1 -> 6
    const dice = Math.trunc(Math.random() * 6) + 1 ;
console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;    

})

