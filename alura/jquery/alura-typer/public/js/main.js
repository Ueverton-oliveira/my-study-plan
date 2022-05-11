var phrase =  $('.frase').text();

var numberWords = phrase.split(' ').length;

var sizeWords = $('#tamanho-frase');

sizeWords.text(numberWords);