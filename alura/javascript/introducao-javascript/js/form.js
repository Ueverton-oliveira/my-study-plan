//evento de clique no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);


  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");


  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  //appendChild: adiciona como filho o elemento passado a ela como parâmetro
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  function obtemPacienteDoFormulario(form) {

    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value
    }
    return paciente;
  }
});