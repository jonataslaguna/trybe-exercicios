import Swal from 'sweetalert2';

const inputCep = document.querySelector('input');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const sectionAddress = document.querySelector('section');

const cepInvalido = () => {
    Swal.fire({
        title: 'Error!',
        text:'CEP inválido. Verifique o número digitado',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

const inputVazio = () => {
    Swal.fire({
        title: 'Ops..',
        text:'Digite um CEP',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}


btn.addEventListener('click', async (event) => {
    event.preventDefault();
    const cep = inputCep.value;
    if (!cep) {
      inputVazio()
      return;
    }
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        h2.innerHTML = 'Dados:'
        const array = Object.entries(data)
        array.map((element) => {
            sectionAddress.innerHTML += ` ${element[0], element[1]} `
        })
    } catch(error){
        cepInvalido()
    }
 
})