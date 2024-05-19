// script.js
document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const shoppingList = document.getElementById('shoppingList');

    let items = [];

    addItemBtn.addEventListener('click', addItem);

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText) {
            items.push(itemText);
            itemInput.value = '';
            renderItems();
        }
    }

    function renderItems() {
        shoppingList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            shoppingList.appendChild(li);
        });
    }
});
