// script.js
document.addEventListener('DOMContentLoaded', () => {
    //Pegue o item input
    const itemInput = document.getElementById('');
    //Pegue o item btn
    const addItemBtn = document.getElementById('');
    //Pegue o item shoppingList
    const shoppingList = document.getElementById('');

    let items = /*Diga que é um item de array vazio*/;

    //adicionar evento click
    addItemBtn.addEventListener('diga que é o evento click', /*coloque a função addItem*/);

    function addItem() {
        const itemText = /*pegue o valor do input sem espaços*/;
        if (itemText) {
            items.push(/*Adicione o itemText*/);
            itemInput.value = /*Diga que é uma string vazia*/;
            //Chame  função renderItem a baixo do comentario
        }
    }

    function renderItems() {
        shoppingList.innerHTML = /*Diga que é uma string vazia*/;
        items.forEach(/*Adicione o parametro item*/ => {
            const li = document.createElement(/*Pase o valor li em formato de string*/);
            li.textContent = /*Atribua item*/;
            shoppingList.appendChild(/*Adicione o li*/);
        });
    }
});
