const ingredientsItens = [
'150 g de bacon picadinho', 
'250 g de linguiça calabresa picadinha', 
'1 xícara (café) de azeite',
'2 cebolas picadinhas',
'6 dentes de alho amassados',
'500 g de feijão cozido e escorrido'
]

const ingredientsList = document.querySelector('#ingredients-list')

for(item of ingredientsItens){
    let ingredient = item

    let ingredientListItem = document.createElement('li')
    ingredientListItem.innerText = ingredient

    ingredientsList.appendChild(ingredientListItem)
}