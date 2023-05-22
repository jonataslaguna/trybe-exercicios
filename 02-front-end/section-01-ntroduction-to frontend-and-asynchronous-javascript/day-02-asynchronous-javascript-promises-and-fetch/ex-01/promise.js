const myPromise = new Promise((resolve, reject) => {
    const nome = 'Jonatas'
    if (nome === 'Jonatas') {
        resolve('Usuário Jonatas encontrado')
    } else {
        reject(new Error ('Usuário não encontrado'))
    }
})

myPromise.then((data) => {
    return data.toUpperCase()
}).then((string) => {
    console.log(string)
})