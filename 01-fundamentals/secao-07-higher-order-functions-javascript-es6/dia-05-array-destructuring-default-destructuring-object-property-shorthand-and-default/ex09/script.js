// escreva greet abaixo
const greet = (param1, param2 = 'Hi') => `${param1} ${param2}` 

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'