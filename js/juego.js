export const listadoPalabras = ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA', 'SASS', 'DJANGO', 'PYTHON', 'LINUX', 'WINDOWS', 'REACT', 'FLUTTER', 'ANGULAR', 'SQL', 'MYSQL', 'SCRUM', 'DENO', 'GIT'];

let intentos = 10;
const contenedorPalabraSecreta = document.getElementById('container-word-secret');
const botonNuevoJuego = document.getElementById('btn-new-game');

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
}

if (contenedorPalabraSecreta) {
    iniciarJuego();
}

if (botonNuevoJuego) {
    botonNuevoJuego.addEventListener('click', () => {
        location.reload();
    });
}