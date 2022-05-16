var titulo = document.querySelector('.titulo');

titulo.textContent = 'banana'


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

valorImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

valorImc.textContent = imc;