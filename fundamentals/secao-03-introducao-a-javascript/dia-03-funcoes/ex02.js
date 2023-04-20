let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adiciona(nome) {
  if (typeof nome === 'string') {
     clientesTrybeBank.push(nome)
     return 'Cliente adicionado'
  } else {
     return 'Deve ser do tipo string'
  }
}

console.log(adiciona('João'))
console.log(clientesTrybeBank)

