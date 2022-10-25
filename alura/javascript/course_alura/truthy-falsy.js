// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
//São valores que JS considera com true ou false
// Exemplos :
// 0 = false
// 1 = true

console.log(0 == false ) // == é usado somente para comparação de valor, ja === é usado para comparação de valor e tipo!
console.log("" == false )
console.log(1 == true )


//undefined e null => vazio ou nada

let minhaVar;
let varNull = null;

console.log(typeof minhaVar) // undefined
console.log(typeof varNull) // object porque criamos um objeto com valor null, null === object