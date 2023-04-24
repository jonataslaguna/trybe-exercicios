localStorage.setItem('movie','2001 space odyssey')

const name = localStorage.getItem('movie')

const person = {
    name: 'Jonatas',
    age: 27,
    job: 'developer web'
}

localStorage.setItem('person', JSON.stringify(person))

const personLocalStorage = localStorage.getItem('person')

const personLocalStorageObject = JSON.parse(personLocalStorage) 

console.log(personLocalStorageObject)