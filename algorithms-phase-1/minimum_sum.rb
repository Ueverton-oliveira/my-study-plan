a = [1, 4, 7, 13]

def minSum(array)
  combination_lengths = (0..array.length)
  all_combinations = combination_lengths.flat_map do |c|
    array.combination(c).to_a
  end
  all_combinations.map(&:sum)
end
