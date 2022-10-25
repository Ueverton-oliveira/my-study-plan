// tipo de dados
// boolean

//conversão implicita
const numero = 456;
const numeroString = '456';
const numeroStringNan = '456a';

console.log(numero == numeroString) // true
console.log(numero === numeroString) // false
console.log(numero + numeroString) // 456456
console.log(numero + Number(numeroString)) // 912
console.log(numero + Number(numeroStringNan)) // NaN