const ul = document.querySelector('ul');
const h2 = document.querySelector('h2')

const createLiElement = (name, value) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong> <span>${value}</span>`
    ul.appendChild(li);
    
}

const renderCoins = (coins, baseCoin) => {
/* coins = [{name: 'USD', value: '80'}] 
   baseCoin = 'BRL' */
   ul.innerHTML = '';
   h2.innerHTML = `VALORES REFERENTES A 1 ${baseCoin}`;
   coins.forEach((coin) => {
        const name = coin.name;
        const value = coin.value;
        const li = createLiElement(name, value)
   })
}

export { renderCoins };
