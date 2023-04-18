let hora = 20
let message = ''

if(hora >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir'
}else if(hora >= 18 && hora <= 22){
    message = 'Rango da noite, vamos jantar :D'
}else if(hora >= 14 && hora < 18){
    message = 'Vamos fazer um bolo pro café da tarde?'
}else if(hora >= 14 && hora < 14){
    message = 'Hora do almoço!!!'
}else{
    message = 'Hmmm, cheiro de café recém-passado'
}

console.log(message)