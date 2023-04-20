const link = document.querySelector('#href')
const text = document.querySelector('#input-text')
const checkBox = document.querySelector('#input-checkbox')

link.addEventListener('click', (event) => {
    event.preventDefault()
})

checkBox.addEventListener('click', (event) => {
    event.preventDefault()
})

text.addEventListener('keypress', (event) => {
    const letra = event.key
    if(letra !== 'a'){
        event.preventDefault()
    }
})