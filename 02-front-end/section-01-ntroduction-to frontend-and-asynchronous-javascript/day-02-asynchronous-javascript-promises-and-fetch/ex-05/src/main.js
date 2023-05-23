import './style.css';

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnSurprise = document.querySelector('#btnSurprise');
const img = document.querySelector('#image');

btnDog.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
        img.src = data.message
    })
})

btnCat.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => {
       img.src = data[0].url
    })
})

btnSurprise.addEventListener('click', (event) => {
    event.preventDefault();
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://api.thecatapi.com/v1/images/search')
    ])
    .then((res) => res.json())
    .then((data) => {
        const pet = data.message || data[0].url;
        img.src = pet;
    })
})