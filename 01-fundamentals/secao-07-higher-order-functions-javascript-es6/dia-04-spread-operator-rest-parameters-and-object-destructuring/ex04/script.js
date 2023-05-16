const sum = (...valores) => {
   return valores.reduce((acc, element) => acc + element, 0);
}

console.log(sum(7,3,5,56,20))