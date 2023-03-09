# frozen_string_literal: true
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'u-case', '~> 4.2.1'
  gem 'pry'
  gem 'awesome_print'

end

class Sum < Micro::Case
  attributes :a, :b

  def call!
    if a.is_a?(Numeric) && b.is_a?(Numeric)
      Success(result: { number: a + b })
    else
      Failure(:attributes_must_be_numerics)
    end
  end
end


class Add3 < Micro::Case
  attributes :number

  def call!
    if number.is_a?(Numeric)
      Success(result: { number: number + 3 })
    else
      Failure(:number_must_be_numerics)
    end
  end

end

result = Sum.call(a:1, b:2)
result.then(Add3)

# ap result.transitions
# result.transitions.class
#  result.transitions.first.keys
#  ap result.transitions[0]

SumAndAdd3 = Micro::Cases.flow([Sum, Add3])

binding.pry
