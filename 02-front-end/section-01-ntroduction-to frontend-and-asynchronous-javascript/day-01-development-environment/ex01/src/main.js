import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtn = document.querySelector('button');
const displayPassword = document.querySelector('h2');
const warning = document.querySelector('h3');

passwordBtn.addEventListener('click', () => {
    warning.innerHTML = '';
    displayPassword.innerHTML = nanoid();
});

displayPassword.addEventListener('click', ({ target }) => {
    copy(target.innerHTML);
    warning.innerHTML = 'Senha copiada!';
});

