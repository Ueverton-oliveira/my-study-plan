# frozen_string_literal: true
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'u-case', '~> 4.2.1'
  gem 'pry'
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

result = Sum.call(a:1, b:2)

binding.pry