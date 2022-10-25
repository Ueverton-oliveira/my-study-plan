let altura = 5;
let comprimento = 6;
let forma = 'retangulo';
//  const area; não pode ser porque constante não podem ser iniciadas sem valores pré definidos
let area; //neste caso tem que ser uma variavel com o let!!

if (forma === 'retangulo') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}
console.log(area)
