const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);
function onInput() {
    if (inputEl.value === '') {
        spanEl.textContent = 'незнакомец'
    } else {
        spanEl.textContent = inputEl.value
    }
}