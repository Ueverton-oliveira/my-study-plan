var titulo = document.querySelector('.titulo');

titulo.textContent = 'banana'


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");

  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido")
  }

  if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido")
  }

  if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

//função anonima e função declarada
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("Olá eu fui clicado!");
}

titulo.addEventListener("click", function (){
  console.log("Olha só posso chamar uma função anônima.")
});

//evento de clique no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
  console.log("Oi, cliquei no botão.");
});