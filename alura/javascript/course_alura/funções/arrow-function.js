// declaração de função
function apresentar(nome) {
  return `Meu nome é: ${nome}`;
}

//Arrow function
// Foi criado em 2015 para tirar return e chaves dos blocos
const apresentarArrow =  nome => `Meu nome é: ${nome}`; //1 parametro não precisa de parenteses
const soma = (n1, n2) => n1 + n2; // dois parametros é obrigatorio parenteses

// Arrow function com + de 1 linha de instrução
const somaNumeroPequenos = (n1, n2) => {
  if(n1 > 10 || n2 > 10) {
    return 'Somente número de 1 a 9';
  } else {
    return n1 + n2;
  }
}