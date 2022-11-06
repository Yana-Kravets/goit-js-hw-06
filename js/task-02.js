const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const listEl = ingredients.map((ingredient) => {
  const newListEl = document.createElement('li');
  newListEl.textContent = ingredient;
  newListEl.classList.add('item');
  return newListEl;
});

console.log(listEl);
ingredientsListEl.append(...listEl);


