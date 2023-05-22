/* fetch('https://invalid.dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data))
  .catch((error) => console.log('Erro ao fazer requisição.', error.message)); */

fetch('https://api.goprogram.ai/inspiration')
    .then((response) => response.json())
    .then((data) => console.log(`${data.quote} ${data.author}`))
    .catch((error) => console.log(`Erro ao fazer a requisição: ${error.message}`))

    

