/*
1. Traerme los elementos del html a Javascript
2. Escuchar un evento sobre el botón jugar
3. Cuando le damos al botón jugar, se genera un número random, que está asociado a una de las opciones del juego y se compara con la jugada de la usuaria.
    3.1 Generar un número random entre el 1 y el 10
    3.2 Asociar los números a las opciones de juego
    3.3 Comparar la jugada del ordenador con la de la usuaria y definir un codigo en función de esa comparación
4. Una vez hecha la comparación, mostrar el texto adecuado para la situación. (Has ganado, perdido o empate)
5. Si me da tiempo leer los bonus
*/ 
'use strcit';

const form = document.querySelector('.js-form');
const select = document.querySelector('.js-select');
const piedra = document.querySelector('.js-piedra');
const papel = document.querySelector('.js-papel');
const tijera = document.querySelector('.js-tijera');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
const jugador = document.querySelector('.js-jugador');
const compu = document.querySelector('.js-compu');
const reset = document.querySelector('.js-reset');
const winnerPerson = document.querySelector('.js-winner');

let selectedPlay = '';
let contadorJugador = '';
let contadorCompu = '';
let click= 0;


function randomNumber() {
    return parseInt(Math.random() * 10) + 1;
}

function choosePlay() {
    const selectedNumber = randomNumber();

    if (selectedNumber <= 3) {
        selectedPlay = 'piedra';
    } else if (selectedNumber >= 7) {
        selectedPlay = 'papel';
    } else {
        selectedPlay = 'tijera';
    }

    return selectedPlay;
}

function pintarResult(jugada) {
    if (jugada === selectedPlay) {
        result.innerHTML = 'Empate';
    } else if (jugada === 'piedra' && selectedPlay === 'papel') {
        result.innerHTML = 'Has perdido';
    } else if (jugada === 'piedra' && selectedPlay === 'tijera') {
        result.innerHTML = 'Has ganado';
    } else if (jugada === 'papel' && selectedPlay === 'piedra') {
        result.innerHTML = 'Has ganado';
    } else if (jugada === 'papel' && selectedPlay === 'tijera') {
        result.innerHTML = 'Has perdido';
    } else if (jugada === 'tijera' && selectedPlay === 'papel') {
        result.innerHTML = 'Has ganado';
    } else {
        result.innerHTML = 'Has perdido';
    };

    console.log(jugada);
    console.log(selectedPlay);
};

function contador() {
    if (result.innerHTML === 'Has ganado') {
        contadorJugador++;
        jugador.innerHTML = `Jugador: ${contadorJugador}`;

    } if (result.innerHTML === 'Has perdido') {
        contadorCompu++;
        compu.innerHTML = `Computador: ${contadorCompu}`;
    };
};

function winner() {
    if (click === 10) {
        winnerPerson.classList.remove('hidden');
        if (contadorJugador > contadorCompu) {
            winnerPerson.innerHTML = 'El ganador es: jugador';
        } else if (contadorJugador < contadorCompu) {
            winnerPerson.innerHTML = 'El ganaqdor es: computadora'
        } else {
            winnerPerson.innerHTML = 'Habéis quedado empate'
        };
        btn.classList.add('hidden');
        reset.classList.remove('hidden');
    };
};

function handleClick(event) {
    click++
    event.preventDefault();
    const valueSelect = select.value;
    randomNumber();
    choosePlay();
    pintarResult(valueSelect);
    contador();
    winner();
};

btn.addEventListener('click', handleClick);