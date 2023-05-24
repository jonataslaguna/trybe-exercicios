import Swal from 'sweetalert2';
import getAddressFromCep from './getAddressFromCep';

const inputCep = document.querySelector('input');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const sectionAddress = document.querySelector('section');


btn.addEventListener('click', async (event) => {
    event.preventDefault();
    const cep = inputCep.value;
    try {
        const addressData = await getAddressFromCep(cep)
        h2.innerHTML = 'Dados:'
        const array = Object.entries(addressData)
        array.map((element) => {
            sectionAddress.innerHTML += ` ${element[0], element[1]} `
        })
    } catch(error){
        Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
 
})