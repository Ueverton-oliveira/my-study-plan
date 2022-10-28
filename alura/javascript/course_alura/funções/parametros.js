// parametro de função
function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 2)) // 4

// ordem dos parametros
// a ordem dos parametros interferem no resultado
function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// parametros padrão
function multiplica(n1=1, n2=1) {
  return n1 * n2;
}

//chamando uma função dentro da outra sem um dos parametro
console.log(multiplica(soma(2, 1))) //3

// mesmo escopo === mesmo ambiente
// obs: se sua função estiver recebendo vários agumento, boa pratica é quebra ela em varias funções menores!