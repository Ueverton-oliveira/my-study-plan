// Durante o curso, fizemos uso de uma estrutura chamada de condicional para definir o fluxo dos nossos programas. As estruturas condicionais são essenciais para a programação, pois permitem que um programa execute este ou aquele bloco de código de acordo com uma condição, por exemplo: “Se o e-mail e a senha estiverem corretos, o usuário poderá acessar o sistema. Senão ele deve receber um aviso de credenciais de acesso incorretas”. Uma condição exclui automaticamente a outra, pois ou ambas as credenciais (e-mail e senha) estarão corretas, ou não.
//
//   As estruturas condicionais permitem que o código se ramifique e tome “caminhos” diferentes de acordo com a condição fornecida.
//
//   Abaixo, vamos relembrar a estrutura condicional ife suas variações:
//
//   if
//     A principal estrutura condicional é if, que podemos traduzir literalmente como “se”:
//
// if (condicao) {
//   // código a ser executado
// }COPIAR CÓDIGO
// A condicao é sempre uma expressão que deverá ser avaliada e retornar true ou false (ou seus equivalentes “truthy” ou “falsy”). O bloco de código dentro do if só será executado caso a expressão retorne true ou um valor “truthy”. Por exemplo:
//
//   const num = 10;
//
// if (num === null) {
//   console.log('número não fornecido');
// }COPIAR CÓDIGO
// No exemplo acima, a instrução console.log(‘número não fornecido’); não será executada, pois como a variável num foi definida com um valor de 10, o resultado da comparação num === null retornará false. Ou seja, o interpretador não vai, como dizemos, “entrar no if” e executar o código.
//
//   Vejamos um outro exemplo:
//
//   const num = 10;
//
// if (num !== null) {
//   console.log(`o número é ${num}`);
// }COPIAR CÓDIGO
// Neste novo exemplo, o código dentro do bloco if será executado normalmente, pois o resultado da expressão num !== null (ou seja, “o valor da variável num é diferente de null”) retorna true.
//
//   A expressão acima também poderia ser escrita da seguinte forma:
//
//   if (num) {
//     console.log(`o número é ${num}`);
//   }COPIAR CÓDIGO
// Com o mesmo resultado.
//
//   Uma vez que null é um valor que podemos atribuir a uma variável, a seguinte estrutura também seria possível:
//
//   const num = null;
//
// if (num === null) {
//   console.log('número não fornecido');
// }COPIAR CÓDIGO
// O código acima também pode ser escrito da seguinte forma, pois null é considerado um valor “falsy”:
//
// if (!num) {
//   console.log('número não fornecido');
// }COPIAR CÓDIGO
// Múltiplas condições
// É possível usar os operadores AND (&&) ou OR (||) para executar o código no if caso uma das condições for verdadeira, ou as duas:
//
//   const num = 11;
//
// if (num > 10 || !num) {
//   console.log('número não válido');
// }COPIAR CÓDIGO
// O console exibe a mensagem corretamente, pois uma das condições foi atendida e retornou true (num > 10). Usamos o operador lógico ||, or (ou ou em português) para especificar que a condição do if será validada se apenas uma das condições for verdadeira, mas não necessariamente todas.
//
//   Também é possível usar o operador lógico && (and ou e em português) para especificar que a condição do if será validada apenas se todas as condições retornarem true:
//
// const num = 11;
//
// if (num > 10 && num < 20) {
//   console.log('número válido');
// }COPIAR CÓDIGO
// O console acima é executado normalmente, pois o número 11 atende ambas as condições especificadas no if: num ser maior do que 10 e/and/&& ser menor do que 20.
//
// if…else
//   Outra forma de condicional muito utilizada é adicionar a cláusula else para ser executada quando a condição do if retorna false. Podemos ler if…else como “se… senão”, como por exemplo “se uma dada condição for verdadeira (true) execute um determinado código; senão, execute outro código”.
//
// function verificaNumero(numero) {
//
//   if (numero > 10) {
//     return 'número maior que 10';
//   } else {
//     return 'número não é maior que 10';
//   }
// }
//
// console.log(verificaNumero(9)) //número não é maior que 10COPIAR CÓDIGO
// No exemplo acima, a comparação numero > 10 retorna false, pois a função foi executada tendo 9 como argumento para num. Assim, o bloco de código dentro do if é ignorado e o interpretador vai direto para o bloco dentro do else.
//
// Veja que else não leva nenhuma condição entre parênteses, pois é executada automaticamente caso a condição do if retorne false ou um valor “falsy”.
//
// else if
//   A condicional if…else vai executar um bloco de código entre duas possibilidades, dependendo do resultado da expressão que é passada como condição do if. Porém, em alguns casos é necessário mais de duas opções de fluxo para o código; para estes casos existe a cláusula else if:
//
// const num = 15;
//
// if (num >= 0 && num <= 10) {
//   console.log('número entre zero e dez');
// } else if (num > 10 && num <= 20) {
//   console.log('número entre dez e vinte');
// } else if (num > 20 && num <= 30) {
//   console.log('número entre vinte e trinta');
// } else {
//   console.log('outro número');
// }COPIAR CÓDIGO
// Veja que a cláusula else if também precisa receber a condição (ou as condições) como parâmetros, ao contrário do else, que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado caso todas as outras condições anteriores falhem.
//
//   IMPORTANTE: Ao trabalhar com múltiplas condições e else if, lembre-se sempre que cada condição e cada bloco (if, else if e else) deve representar condições excludentes entre si! Ou seja, não pode haver ambiguidade entre as condições - uma mesma condição válida tanto no if quanto no else if, por exemplo.