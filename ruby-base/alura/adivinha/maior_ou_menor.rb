puts "Bem vindo ao jogo da adivinhação"
puts "Qual é o seu nome?"
nome = gets

puts "Começaremos o jogo para você, #{nome}"
puts "\n\n\n\n\n\n"
puts "Escolhendo um número secreto entre 0 e 200..."
numero_secreto = 175
puts "Escolhido... que tal adivinhar hoje nosso número secreto?"
puts "\n\n\n\n\n\n"
puts "Tentativa 1"
puts "Entre com o numero: "
chute = gets

puts "Será que acertou? Você chutou #{chute}"
chute_errrado = chute.to_i == numero_secreto
if chute_errrado
  puts "Parabéns #{nome} você acertou!"
else
  puts "Errou! Número correto seria: #{numero_secreto}"
end
