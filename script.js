'use strict';

const player01 = document.querySelector('.player--0')
const player02 = document.querySelector('.player--1')
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

const scores = [0, 0]
let current = 0
let activePlayer = 0
let playing = true

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    current = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player01.classList.toggle('player--active')
    player02.classList.toggle('player--active')
}


rollBtn.addEventListener('click', () => {
    if (playing) {        
        const randDice = Math.trunc(Math.random() * 6) + 1

        console.log(randDice)
        dice.classList.remove('hidden')
        dice.src = `dice-${randDice}.png`

        if (randDice !== 1) {
            current += randDice
            document.getElementById(`current--${activePlayer}`).textContent = current 
        }else {
            switchPlayer()
        }
    }   
})

holdBtn.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += current
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            playing = false
            dice.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            switchPlayer()
        }
    }
})