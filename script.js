'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const imageDice = document.querySelector('.dice');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let player0Status = true;

const resetAllScores = function () {
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  imageDice.style.display = 'none';
};

resetAllScores();

function switchPlayers(player0Active) {
  if (player0Active) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    return false;
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    return true;
  }
}

btnRollDice.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6 + 1);
  imageDice.src = `dice-${number}.png`;
  imageDice.style.display = 'block';
  if (number !== 1) {
    player0.classList.contains('player--active')
      ? (current0.textContent = Number(current0.textContent) + number)
      : (current1.textContent = Number(current1.textContent) + number);
  } else {
    player0Status = switchPlayers(player0Status);
    current0.textContent = 0;
    current1.textContent = 0;
  }
});

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player0Score.textContent =
      Number(player0Score.textContent) + Number(current0.textContent);
    player0Status = switchPlayers(player0Status);
    current0.textContent = 0;
  } else {
    player1Score.textContent =
      Number(player1Score.textContent) + Number(current1.textContent);
    player0Status = switchPlayers(player0Status);
    current1.textContent = 0;
  }
});
