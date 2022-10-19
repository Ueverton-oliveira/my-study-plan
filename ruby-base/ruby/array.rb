estados = []

days = %w{Monday Tuesday Wednesday Thursday Friday Saturday Sunday}

#Inserção de elementos
estados.push('Espirito Santo')
estados.push('Minas Gerais', 'Rio de Janeiro', 'São Paulo')
estados << 'MS'
estados.insert(0, 'Acre', 'Amapa')
estados.unshift('ms') #inseri na posição 0

#mostrar elementos
estados[1]
estados[1..3]
estados[-1] #ultimo elemento
estados[-2..-5]
estados.first
estados.count
estados.lenght
estados.empty?
estados.include?('São Paulo')

#deletar elementos

estados.delete_at(2)
estados.delete('ms')
estado.pop #exclui o ultimo elemento
estado.shift #exclui o primeiro elemento

#conversão do elementos em string

array = %w[U e v e r t o n]
array.join #  "Ueverton"

array.join('-') #"U-e-v-e-r-t-o-n"

# metodos

