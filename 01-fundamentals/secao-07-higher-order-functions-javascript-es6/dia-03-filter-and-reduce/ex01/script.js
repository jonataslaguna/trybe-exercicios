const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

/* const pares = numbers.filter((number) => number % 2 === 0)

const somaPares = pares.reduce((acc, curr) => acc + curr)

console.log(somaPares)
 */
/* const somaApenasPares = numbers.reduce((acumulador, valorAtual) => {
    if (valorAtual % 2 === 0) {
       return acumulador + valorAtual
    }else {
       return acumulador
    }
}) */

const somaApenasPares = numbers.reduce((acc, curr) => curr %  2 === 0 ? acc + curr : acc)
console.log(somaApenasPares)




