'use strict';

const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const dice = document.querySelector('.dice')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')


score0.textContent = 0
score1.textContent = 0
dice.classList.add('hidden')

let current = 0

rollBtn.addEventListener('click', () => {
    const randDice = Math.trunc(Math.random() * 6) + 1

    console.log(randDice)
    dice.classList.remove('hidden')
    dice.src = `dice-${randDice}.png`
    current += randDice
    current0.textContent = current

})

