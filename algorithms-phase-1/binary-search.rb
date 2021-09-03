class Array
  def binary_search(targeted_value, low = 0, high = nil)
    high ||= size - 1
    mid = (low + high) / 2

    return "Not found" if low > high

    if targeted_value == self[mid]
      return mid
    elsif targeted_value > self[mid]
      binary_search(targeted_value, mid + 1, high)
    else
      binary_search(targeted_value, low, mid - 1)
    end
  end
end

array = [1, 3, 6, 8, 12, 14, 15, 20, 142].sort
targeted_values = [3, 2, 142]
returned_indexes = targeted_values.map { |i| array.binary_search(i) }.join(', ')

puts "The targeted values #{targeted_values} are found in the  indexes: #{returned_indexes}; respectively"

# OUTPUT
# The targeted values [3, 2, 142] are found in the  indexes: 1, Not found, 8; respectively