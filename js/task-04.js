let counterValue = +document.querySelector('#value').textContent;

const btnContainerEl = document.querySelector('#counter');
const btnDecrementEl = btnContainerEl.firstElementChild;
const btnIncrementEl = btnContainerEl.lastElementChild;

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
