// declaração de função (declara um nome para função)

function nomeFuncao(params) {
//  bloco de código
}

nomeFuncao('params')

// expresão de função (não recebe nome, por isso anônima)

const soma = function (n1, n2) { return n1 + n2 }
// obs: boa pratica manter tudo na mesma linha

console.log(soma(1,2))

// Diferença principal !!!
// var e funções são listadas no topo do codigo, por isso o acesso ocorre antes da declaração!
// EXEMPLO
console.log(apresentar())

function apresentar() {
  return 'Olá';
}

console.log(apresentarConst()) // ocorre um erro de acesoso a variavel

const apresentarConst = function () { return 'Olá' }