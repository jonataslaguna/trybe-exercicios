let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços')
let portfólio = menu.indexOf('Portfólio')
menu.push('Contato')
console.log(menuServices)
console.log(portfólio)
for(i in menu){
    console.log(menu[i])
}
