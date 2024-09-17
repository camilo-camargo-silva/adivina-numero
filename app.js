var numero_secreto = Math.round(Math.random() * 10);
var numero_intento = 0;
let entrada = document.querySelector('.entrada');
let mensaje = document.querySelector('.mensaje');

let playButton = document.querySelector('.play');
playButton.addEventListener('click', attemp);

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', restart);

function attemp() {
    numero_intento++;
    let number = parseInt(entrada.value);
    if (number == numero_secreto) endGame('Ganaste 🏆');
    else if (numero_intento == 3) endGame('Perdiste 😴');
    else  mensaje.innerHTML = `El número secreto es ${(number < numero_secreto) ? 'Mayor'  : 'Menor'}`;
}

function endGame(message) {
    mensaje.innerHTML = message;
    playButton.setAttribute('disabled', true);
    resetButton.removeAttribute('disabled');
}

function restart() {
  numero_secreto = Math.round(Math.random() * 10);
  numero_intento = 0;
  playButton.removeAttribute('disabled');
  resetButton.setAttribute('disabled', true);
  mensaje.innerHTML = '';
}

