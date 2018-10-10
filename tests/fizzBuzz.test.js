const assert = require('assert');
const {
  fizzBuzz,
  isFizz,
  isBuzz,
} = require('../fizzBuzz');

describe('fizzBuzz', () => {
  it('should display fizz for range = 3', () => {
    assert.deepEqual(fizzBuzz(3), [1,2,'fizz']);
  })

  it('should display number for range = 1', () => {
    assert.deepEqual(fizzBuzz(1), [1]);
  })

  it('should display fizz and buzz for range = 5', () => {
    assert.deepEqual(fizzBuzz(5), [1,2,'fizz',4,'buzz'])
  })

  it('should display fizz, buzz and fizzbuzz for range = 15', () => {
    assert.deepEqual(fizzBuzz(15), [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
    ])
  })

  it('should validate fizz', () => {
    assert(isFizz(3))
    assert(isFizz(6))
    assert(isFizz(9))
  })

  it('should validate buzz', () => {
    assert(isBuzz(5))
    assert(isBuzz(10))
    assert(isBuzz(15))
  })
})
