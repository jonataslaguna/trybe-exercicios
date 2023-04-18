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

const minhasSkills = (func) => {
    const skills = ['HTML', 'JavaScript', 'Css']
    let presentation = `${func} Minhas três habilidades são: ${skills}` 
    return presentation
}

console.log(minhasSkills(substituaX('Jonatas')))
