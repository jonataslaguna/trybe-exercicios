  const maiorPalavra = (frase) => {
    const arrayFrase = frase.split(' ')
    let max = 0
    let result = ''

    for(palavra of arrayFrase){
        if(palavra.length > max){
            max = palavra.length
            result = palavra
        }
    }
    return `O maior palavra da frase é [${result}]`
  }

  console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'))

