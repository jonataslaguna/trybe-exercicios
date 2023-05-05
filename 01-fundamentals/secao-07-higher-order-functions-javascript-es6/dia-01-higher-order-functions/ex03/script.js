const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const verify = arr.some((nameCurrent) => nameCurrent === name)
  return verify
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));