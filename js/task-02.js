const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mareIngredientEl = ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('.item');

  const list = document.querySelector('ul');
  list.append(listEl);

  return listEl;
}

const elements = ingredients.map(mareIngredientEl);

console.log(elements);






