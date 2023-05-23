import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const btn = document.querySelector('button');
const name = document.querySelector('#name');

const maxCharaters = 820;

const randomId = () => Math.floor(Math.random() * maxCharaters);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId();

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
        img.src = data.image;
        name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
        title: 'Character not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
    }));
})