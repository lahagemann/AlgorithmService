const isFizz = number => number % 3 == 0

const isBuzz = number => number % 5 == 0

const fizzBuzzMap = (value, index) => {
  const number = index + 1
  
  if(isFizz(number) && isBuzz(number)) {
    return 'fizzbuzz'
  }

  if(isFizz(number)) {
    return 'fizz'
  }

  if(isBuzz(number)) {
    return 'buzz'
  }

  return number
}

const fizzBuzz = range => Array(range).fill().map(fizzBuzzMap)


module.exports = {
  fizzBuzz,
  isFizz,
  isBuzz,
}
