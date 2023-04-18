const numbers = [45,12,20,78,90,8,2,6,5,27]
let menor = numbers[0]
for(index =0;index<numbers.length;index+=1){
    if(numbers[index] < menor){
        menor = numbers[index]
    }
}

console.log(menor)