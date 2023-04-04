const substituaX = (nome) =>{
    const frase = 'Tryber x aqui!'
    let arrayFrase = frase.split('')
    let fraseModificada;
    for(i in arrayFrase){
        if(arrayFrase[i] === 'x'){
            arrayFrase[i] = nome
            fraseModificada = arrayFrase.join('')
        }
    }
    return fraseModificada
}

console.log(substituaX('Jonatas'))