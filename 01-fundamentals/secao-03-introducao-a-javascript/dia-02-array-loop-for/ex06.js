let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let maior = 0
let impares = 0

for(i of numbers){
    soma += i
    if(i > maior){
        maior = i
    }
}

console.log(`A soma vale ${soma}`)
console.log(`A média dos valores é ${soma / numbers.length}`)
console.log(`O maior número do array é ${maior} `)

if(soma > 20){
    console.log('O valor da soma maior que 20')
}else{
    console.log('O valor da soma menor ou igual a 20')
}

console.log(`O maior número do array é ${maior} `)
