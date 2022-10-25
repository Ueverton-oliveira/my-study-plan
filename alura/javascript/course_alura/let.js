// var
// criado em 2015 para resolver problema da vaiavel 'var'

let altura = 5;
let comprimento = 6;
let forma = 'retangulo';
let area; // variavel 'area' precisa ser declarada porque assim não conseguimos acessa-la

if (forma === 'retangulo') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}
console.log(area)

