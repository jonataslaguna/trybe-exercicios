let peça = 'cavalo'

switch (peça) {
    case 'peão':
    console.log('Move-se uma casa para frente')
         break
    case 'cavalo':
    console.log('Move-se duas casas na horizontal ou na vertical e depois uma para o lado.')
        break
    case 'bispo':
    console.log('Mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça')
        break
    case 'rei':
    console.log('Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance')
        break
}