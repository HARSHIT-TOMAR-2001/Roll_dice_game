'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const die = document.querySelector('.dice');
const currentscore0 = document.getElementById('current--0');
const currentscore1 = document.getElementById('current--1');
const rolldie = document.querySelector('.btn--roll');
const holddie = document.querySelector('.btn--hold');
const newdie = document.querySelector('.btn--new');

//starting
score0.textContent = 0;
score1.textContent = 0;
die.classList.add('hidden');

let scores = [0, 0];
let cscore = 0;
let activePlayer = 0;
let playing = true;
//rolling die
rolldie.addEventListener('click', function () {
  //generate no.
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display dice
    die.classList.remove('hidden');
    die.src = `dice-${dice}.png`;

    //if dice is not one!!
    if (dice !== 1) {
      cscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = cscore;
    } else {
      //if dice is one switch the player!
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      cscore = 0;
    }
  }
});

holddie.addEventListener('click', function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += cscore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      die.classList.add('hidden');
    } else {
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      cscore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      //   scores[Number(`${activePlayer}`)] += cscore;
      //   score0.textContent = scores[0];
      //   score1.textContent = scores[1];
    }
  }
});

newdie.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  die.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  player0.classList.add('player--active');

  player1.classList.remove('player--active');

  const currentscore0 = (document.getElementById('current--0').textContent = 0);
  const currentscore1 = (document.getElementById('current--1').textContent = 0);
  scores = [0, 0];
  cscore = 0;
  activePlayer = 0;
  playing = true;
});
