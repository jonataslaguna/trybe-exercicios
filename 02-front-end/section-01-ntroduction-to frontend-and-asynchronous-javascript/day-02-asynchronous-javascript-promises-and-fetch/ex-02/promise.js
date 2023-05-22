const RandomNumber = () => Math.round(Math.random() * 10)

const myPromise = () => new Promise((resolve, reject) => {
   setTimeout(() => {
    const number = RandomNumber()
    if (number % 2 === 0) {
        resolve(`${number}`)
    } else {
        reject(new Error(`O número ${number} é inválido. Somente números pares são validos`))
    }
   },1000)

})

myPromise().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(`Promisse reject: ${error}`)
})