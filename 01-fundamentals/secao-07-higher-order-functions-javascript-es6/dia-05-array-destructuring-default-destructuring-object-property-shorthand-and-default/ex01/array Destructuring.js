const primeNumbers = [17, 23, 37]
const [number1,number2,number3] = primeNumbers 

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

sum(number1,number3)