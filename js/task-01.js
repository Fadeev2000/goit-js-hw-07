const itemsEl = document.querySelectorAll('li.item');

console.log(`В списке ${itemsEl.length} категории.`);


Array.from(itemsEl).map(option => {
    const nestedItemsEl = option.querySelectorAll('li.item li');
    
    console.log(`Категория: ${option.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${nestedItemsEl.length}`);
});



