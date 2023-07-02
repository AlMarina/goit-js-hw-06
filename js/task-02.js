const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
const itemsEl = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = `${item}`;
  li.classList.add('item');
  return li;
})
listEl.append(...itemsEl);
console.log(listEl);
