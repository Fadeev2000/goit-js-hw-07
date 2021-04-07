let counterValue = +document.querySelector('#value').textContent;

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');

btnDecrementEl.addEventListener('click', decrement);
function decrement() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

btnIncrementEl.addEventListener('click', increment);
function increment() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}
