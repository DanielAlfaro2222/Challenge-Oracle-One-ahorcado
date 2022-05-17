export const listadoPalabras = ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA', 'SASS', 'DJANGO', 'PYTHON', 'LINUX', 'WINDOWS', 'REACT', 'FLUTTER', 'ANGULAR', 'SQL', 'MYSQL', 'SCRUM', 'DENO', 'GIT'];

let intentos = 10;
const contenedorPalabraSecreta = document.getElementById('container-word-secret');
const botonNuevoJuego = document.getElementById('btn-new-game');
const botonesJuego = document.querySelectorAll('.container-buttons-game__btn');
const contenedorCantidadIntentos = document.getElementById('cantidad-intentos');

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
    let palabraSecreta = obtenerPalabraAleatoria(listadoPalabras);
    agregarHijosAlContenedor(palabraSecreta);

    for (let boton of botonesJuego) {
        boton.onclick = function () {
            boton.classList.add('container-buttons-game__btn--deactivate');
            ejecutarIntento(boton);
        };
    }
}

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
        for (let boton of botonesJuego) {
            boton.classList.add('container-buttons-game__btn--deactivate');
        }
    }

    return contenedorCantidadIntentos.textContent = `Cantidad intentos: ${intentos}`;
}

// Funcion para ejecutar el intento del usuario
function ejecutarIntento(boton) {
    intentos--;
    actulizarContenedorCantidadIntentos(intentos);
}