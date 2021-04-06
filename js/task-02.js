const arr = [1, 3, 5];
const makeListEl = arr.map(prop => {
    const el = document.createElement('li');
    el.textContent = prop;
    return el;
});
console.log(makeListEl);
const listEl = document.querySelector('ul');
listEl.appendChild(...makeListEl);