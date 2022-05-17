import { listadoPalabras } from "./juego.js";

// Funcionalidad para agregar una nueva palabra
const botonGuardar = document.getElementById('btn-save');
const textAreaNuevaPalabra = document.getElementById('textarea-word');

botonGuardar.addEventListener('click', () => {
    if (textAreaNuevaPalabra.value.length === 0) {
        alert('Debe ingresar una palabra');
    } else if (textAreaNuevaPalabra.value.length > 8) {
        alert('La palabra debe tener maximo 8 caracteres, por favor corrija e intente de nuevo');
    } else {
        listadoPalabras.push(textAreaNuevaPalabra.value.trim().toUpperCase());
        alert('La palabra se agrego con exito');

        let url = window.location.origin;
        location.href = `${url}/views/juego.html`;
    }
});