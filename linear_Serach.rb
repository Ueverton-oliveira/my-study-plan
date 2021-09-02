class Array
  def linear_search(targeted_values)
    i = 0
    while i < self.length
      if self[i] == targeted_values
        return i
      end
      i += 1
    end
    "Not found"
  end
end

array = [1, 3, 6, 8, 12, 14, 15, 20, 142]
targeted_values = [3, 12, 5]
returned_indexes = targeted_values.map { |i| array.linear_search(i)}.join(', ')

puts "The targeted values #{targeted_values} are found in the  indexes: #{returned_indexes}; respectively."