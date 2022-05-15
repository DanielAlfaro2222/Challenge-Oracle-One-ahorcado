'use strict';

const botonIniciarJuego = document.getElementById('btn-start-game');

botonIniciarJuego.addEventListener('click', () => {
    let url = window.location.origin;
    location.href = `${url}/views/juego.html`;
});