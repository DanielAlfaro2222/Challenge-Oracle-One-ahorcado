export const listadoPalabras = ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA', 'SASS', 'DJANGO', 'PYTHON', 'LINUX', 'WINDOWS', 'REACT', 'FLUTTER', 'ANGULAR', 'SQL', 'MYSQL', 'SCRUM', 'DENO', 'GIT'];

import { dibujarLinea, dibujarCircunferencia, dibujarExtremidades } from './canvas.js';

let intentos = 10;
const contenedorPalabraSecreta = document.getElementById('container-word-secret');
const botonNuevoJuego = document.getElementById('btn-new-game');
const botonesJuego = document.querySelectorAll('.container-buttons-game__btn');
const contenedorCantidadIntentos = document.getElementById('cantidad-intentos');
const palabraSecreta = obtenerPalabraAleatoria(listadoPalabras);

function obtenerPalabraAleatoria(array) {
    let numeroAletorio = Math.trunc(Math.random() * (array.length - 0) + 0);

    return array[numeroAletorio];
}

// Funcion para crear un div con una letra
function crearDivDeLaLetra(letra) {
    let elemento = document.createElement('div');
    elemento.classList.add('container-word-secret__div');

    return elemento;
}

// Funcion que agrega los elementos de cada letra al contenedor de la palabra secreta
function agregarHijosAlContenedor(palabra) {
    for (let letra of palabra) {
        contenedorPalabraSecreta.appendChild(crearDivDeLaLetra(letra));
    }
}

function iniciarJuego() {
    agregarHijosAlContenedor(palabraSecreta);

    for (let boton of botonesJuego) {
        boton.onclick = function () {
            boton.classList.add('container-buttons-game__btn--deactivate');
            ejecutarIntento(boton, palabraSecreta);
        };
    }
}

// Iniciar el juego cada vez que se recargue la pagina
if (contenedorPalabraSecreta) {
    iniciarJuego();
}

// Recargar la pagina para iniciar un nuevo juego
if (botonNuevoJuego) {
    botonNuevoJuego.addEventListener('click', () => {
        location.reload();
    });
}

// Actualizar la informacion en pantalla sobre la cantidad de intentos
function actulizarContenedorCantidadIntentos(intentos) {

    // Si los intentos se agotan, todos los botones quedaran deshabilitados
    if (intentos === 0) {
        bloquearFuncionalidadBotones();
        setTimeout(alert, 500, `Perdiste 😢, la palabra secreta era ${palabraSecreta}`);
    }

    return contenedorCantidadIntentos.textContent = `Cantidad intentos: ${intentos}`;
}

// Bloquear los botones despues de que se acabe el juego
function bloquearFuncionalidadBotones() {
    for (let boton of botonesJuego) {
        boton.classList.add('container-buttons-game__btn--deactivate');
    }
}

function validarGanador(palabras) {
    let ganador = true;

    for (let letra of palabras) {
        if (letra.textContent === '') {
            ganador = false;
        }
    }

    if (ganador) {
        bloquearFuncionalidadBotones();
        alert('Felicitaciones ganaste 🥳!!!');
    }

    return ganador;
}

// Funcion para ejecutar el intento del usuario
function ejecutarIntento(boton, palabraSecreta) {
    const contenedoresLetrasPalabraSecreta = document.querySelectorAll('.container-word-secret__div');

    if (palabraSecreta.includes(boton.textContent)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === boton.textContent) {
                contenedoresLetrasPalabraSecreta[i].textContent = palabraSecreta[i];
                setTimeout(validarGanador, 500, contenedoresLetrasPalabraSecreta);
            }
        }

    } else {
        intentos--;

        switch (intentos) {
            case 9:
                dibujarLinea(0, 213, 220, 220);
                break;
            case 8:
                dibujarLinea(50, 0, 7, 220);
                break;
            case 7:
                dibujarLinea(50, 0, 90, 7);
                break;
            case 6:
                dibujarLinea(133, 0, 7, 40);
                break;
            case 5:
                dibujarCircunferencia(136, 60, 20, 0, 2 * Math.PI);
                break;
            case 4:
                dibujarLinea(134, 80, 4, 70);
                break;
            case 3:
                dibujarExtremidades(136, 150, 160, 180);
                break;
            case 2:
                dibujarExtremidades(134, 150, 110, 180);
                break;
            case 1:
                dibujarExtremidades(136, 90, 110, 120);
                break;
            case 0:
                dibujarExtremidades(137, 90, 160, 120);
                break;
        }

        actulizarContenedorCantidadIntentos(intentos);
    }
}