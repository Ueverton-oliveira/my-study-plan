list = [2, 4, -5, 1, 3]

def bubble_sort(list)
  size = list.size - 1
  #percorrer todo o array
  for i in 0..size
    #comparar o elemento atual com o próximo
    for j in 0..size-i-1
      if list[j] > list[j+1]
        list[j], list[j+1] = list[j+1], list[j]
      end
    end
  end
  list
end
puts bubble_sort(list)
