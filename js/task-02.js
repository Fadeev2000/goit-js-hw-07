const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeItems = ingredients.map(ingredient => {
    const makeItemEl = document.createElement('li');
    makeItemEl.textContent = ingredient;
    return makeItemEl;
})

const listEl = document.querySelector('ul');
listEl.append(...makeItems);