const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInput);
function onInput(e) {
    if (e.currentTarget.value === '') {
        refs.spanEl.textContent = 'незнакомец'
    } else {
        refs.spanEl.textContent = refs.inputEl.value
    }
}