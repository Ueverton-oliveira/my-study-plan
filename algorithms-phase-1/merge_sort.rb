list = [2, 4, -5, 1, 3]

def sort(list)
  return list if list.length <= 1

  mid = (list.length / 2).round

  left_array  = list.take(mid)
  right_array = list.drop(mid)

  sorted_left = sort(left_array)
  sorted_right = sort(right_array)

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  return left if right.empty?
  return right if left.empty?

  small_number = left.first <= right.first ? left.shift : right.shift

  again = merge(left, right)

  [small_number].concat(again)
end

print sort(list)
