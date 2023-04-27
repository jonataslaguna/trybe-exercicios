const validate = (...valores) => {
  for (valor of valores) {
    if(typeof valor !== 'number') {
        throw new Error('Todos os valores devem ser numéricos')
    }
  }
}

const calculate = (...valores) => {
    try{
        validate(...valores)
        let soma = 0
        for (valor of valores) {
            soma += valor
        }
        return soma / valores.length;
    } catch (error) {
        return error.message;
    }
}

console.log(calculate(4,6,7,9,'5'))