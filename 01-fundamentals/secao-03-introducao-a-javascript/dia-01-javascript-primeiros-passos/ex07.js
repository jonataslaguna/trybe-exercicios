let boletim = 'aprovada'

switch (boletim) {
    case 'aprovada':
        boletim = "Parabéns, você está no grupo de pessoas aprovadas!"
        break
    case 'lista':
        boletim = 'Você está na nossa lista de espera'
        break
    case 'reprovada':
        boletim = 'Infelizmente, você reprovou.'
        break
    default:
        boletim = 'Informação incorreta'
        break
}

console.log(boletim)