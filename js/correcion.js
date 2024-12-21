'use strict';
/*
1. Crear las variables de los elementos del html
2. Escuchar el evento sobre el botón click
3. Recoger el valor de la usuaria
4. Generar un número aleatorio, y decirle que jugada elige en función del número que salga
5. Comparar la jugada de la usuaria con la del ordenador
6. Pintar el mensaje en función de quién ha ganado
*/

const moveUser = document.querySelector('.js-move');
const btn = document.querySelector('.js-play');
const result = document.querySelector('.js-result');
const pUserResult = document.querySelector('.js-counter-win');
const pPcResult = document.querySelector('.js-counter-lost');
const btnReset = document.querySelector('.js-btnreset');

let pcScore = 0;
let userScore = 0;
let countClick = 0;

//generar número aleatorio
function getRandomNumber(max){
    return Math.ceil(Math.random() * max);
}

//generar el movimiento del ordenador
function pcMove() {
    const randomNumber = getRandomNumber(10);
    let computerValue
    if (randomNumber <= 3 ) {
        computerValue = 'piedra';
    } else if (randomNumber >= 7 ) {
        computerValue = 'papel';
    } else {
        computerValue = 'tijera';
    }
    return computerValue;
}

function paintResult (message) {
    result.innerHTML = message;
}

function playGame(userValue) {
    countClick++;
    const pcValue = pcMove();
    if (userValue === pcValue) {
        paintResult('Empate');
    } else if (
        (userValue === 'tijera' && pcValue === 'papel') || 
        (userValue === 'piedra' && pcValue === 'tijera') || 
        (userValue === 'papel' && pcValue === 'piedra')
        ) {
        paintResult('Has ganado');
        userScore++;
    } else {
        paintResult('Has perdido');
        pcScore++;
    }
    pUserResult.innerHTML = `Jugadora: ${userScore}`;
    pPcResult.innerHTML = `Computadora: ${pcScore}`;
}

function paintResultScore() {
    pUserResult.innerHTML = `Jugadora: ${userScore}`;
    pPcResult.innerHTML = `Computadora: ${pcScore}`;
}

function gameOver() {
    if (countClick >= 10) {
        if (userScore > pcScore ){
            paintResult('Has ganado el juego');
        } else if (userScore < pcScore) {
            paintResult('Has perdido el juego');
        } else {
            paintResult('Empate general');
        }
        btn.classList.add('hidden');
        btnReset.classList.remove('hidden');
    }
}

function handleClick(event) {
    event.preventDefault();
    const userValue = moveUser.value;
    playGame(userValue);
    gameOver();
}

btn.addEventListener('click', handleClick);

function handleReset(event) {
    event.preventDefault();
    btn.classList.remove('hidden');
    btnReset.classList.add('hidden');
    pcScore = 0;
    userScore = 0;
    countClick = 0;
    paintResultScore();
    paintResult('Vamos a jugar');

}

btnReset.addEventListener('click', handleReset);
