const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBronken() {
  return lamp.src.indexOf('quebrada') > -1;
}
function ligarLampada() {
  if (!isLampBronken()) lamp.src = './img/ligada.jpg';
}

function desligarLampada() {
  if (!isLampBronken()) lamp.src = './img/desligada.jpg';
}

function quebrarLampada() {
  lamp.src = './img/quebrada.jpg';
}
console.log('hello world');

turnOn.addEventListener('click', ligarLampada);
turnOff.addEventListener('click', desligarLampada);
lamp.addEventListener('mouseover', ligarLampada);
lamp.addEventListener('mouseleave', desligarLampada);
lamp.addEventListener('dblclick', quebrarLampada);
