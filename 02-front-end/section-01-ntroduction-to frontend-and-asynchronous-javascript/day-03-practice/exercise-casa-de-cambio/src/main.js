import { renderCoins } from './component'

import './style.css';

const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    const input = document.querySelector('input');
    const moeda = input.value;
    const response = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    const data = await response.json();
    const rates = data.rates;
    const base = data.base
    const ratesArray = Object.entries(rates).map((element) => ({
        name: element[0],
        value: element[1],
    }))
    renderCoins(ratesArray, base)
});


