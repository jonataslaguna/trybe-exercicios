const numeros = [5,45,20,27,82,237,149,8]
let impares = 0
for(i of numeros){
    if(i % 2 !== 0){
        impares = impares + 1
    }
}
console.log(impares)