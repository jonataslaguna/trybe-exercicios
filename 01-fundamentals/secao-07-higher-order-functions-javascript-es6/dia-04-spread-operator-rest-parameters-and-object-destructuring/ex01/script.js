// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Jabuticaba', 'Manga', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacate', 'Abacaxi', 'Açai'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));