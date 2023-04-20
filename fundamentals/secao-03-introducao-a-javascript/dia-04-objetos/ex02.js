let player = {
    firstName: 'Jonatas',
    lastName: 'Laguna',
    age: 27,
    medals: {
        golden: 2, silver: 3
    }
}

console.log('O jogador ' + player.firstName + ' ' + player.lastName + ' tem ' + player.age + ' de idade!')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('O jogador Jonatas foi eleito o melhor do mundo por 6 vezes ' + player['bestInTheWorld'])

console.log('O jogador possui ' + player.medals.golden + ' medalhas de ouro e ' +  player.medals.silver + ' medalhas de prata')