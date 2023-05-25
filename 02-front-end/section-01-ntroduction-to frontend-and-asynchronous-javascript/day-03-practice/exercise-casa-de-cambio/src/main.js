import { renderCoins } from './component'
import Swal from 'sweetalert2';

import './style.css';

const btn = document.querySelector('button');

const erroInputVazio = () => {
    Swal.fire({
        title: 'Erro!',
        text: 'Por favor, digite uma moeda',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

const erroMoedaInvalida = () => {
    Swal.fire({
        title: 'Erro!',
        text: 'Moeda inválida',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

btn.addEventListener('click', async () => {
    const input = document.querySelector('input');
    const moeda = input.value;
    if (!moeda) {
      return erroInputVazio()
    }
    const response = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    const data = await response.json();
    const rates = data.rates;
    const base = data.base
    if (moeda.toLocaleUpperCase() !== base) {
        return erroMoedaInvalida();
    }
    const ratesArray = Object.entries(rates).map((element) => ({
        name: element[0],
        value: element[1],
    }))
    renderCoins(ratesArray, base)
});


