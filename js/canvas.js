export { dibujarLinea, dibujarCircunferencia, dibujarExtremidades };

const canvas = document.getElementById('canvas');
let contexto;
const color = '#0A3871';

if (canvas) {
    contexto = canvas.getContext('2d');
}

function dibujarLinea(x, y, width, height) {
    contexto.fillStyle = color;
    contexto.fillRect(x, y, width, height);
}

function dibujarCircunferencia(x, y, radio, anguloInicio, anguloFin) {
    contexto.lineWidth = 4;
    contexto.arc(x, y, radio, anguloInicio, anguloFin);
    contexto.strokeStyle = color;
    contexto.stroke();
}

function dibujarExtremidades(moveToX, moveToY, lineToX, lineToY) {
    contexto.beginPath();
    contexto.lineWidth = 4;
    contexto.moveTo(moveToX, moveToY);
    contexto.lineTo(lineToX, lineToY);
    contexto.strokeStyle = color;
    contexto.stroke();
}