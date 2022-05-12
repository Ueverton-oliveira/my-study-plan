var phrase =  $('.frase').text();

var numberWords = phrase.split(' ').length;

var sizeWords = $('#tamanho-frase');

sizeWords.text(numberWords);

var campoDigitacao = $('.campo-digitacao');

campoDigitacao.on("input", function(){
  var conteudo = campoDigitacao.val();
  var quantidadePalavras = conteudo.split(" ").length;
    $("#contador-palavras").text(quantidadePalavras);

  var quantidadeCaracteres = conteudo.length;
    $("#contador-caracteres").text(quantidadeCaracteres);
});