var titulo = document.querySelector('.titulo');

titulo.textContent = 'banana'


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(peso);
console.log(altura);