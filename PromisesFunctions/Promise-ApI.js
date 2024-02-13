function perfectSquare (number) {
  return new Promise(function (fulfilled, rejected) {
    const o = Number.isInteger(Math.sqrt(number))
    if (!o) {
        return rejected( new Error(`Number ${number} is NOT a perfect square`) )
    }
    fulfilled( `Number ${number} is a perfect square` )
  })
}
perfectSquare(25).then(res => {
  console.log(res)
})
