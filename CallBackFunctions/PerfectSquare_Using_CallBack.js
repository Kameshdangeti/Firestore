function perfectSquare (number, callback) {
    const b = Number.isInteger(Math.sqrt(number))
    if (!b) {
      return callback(`Number ${number} is NOT a perfect square` )
    }
    callback(`Number ${number} is a perfect square`)
  }

  function callback(data){
    console.log(data)
  }
  perfectSquare(25, callback)