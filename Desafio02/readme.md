Documentação: Desafio Lista de Compras
Introdução
Este documento descreve a implementação de uma aplicação web simples para criar uma lista de compras. A aplicação permite que o usuário adicione itens à lista e visualize os itens adicionados. A aplicação utiliza HTML para a estrutura, CSS para a estilização (opcional), e JavaScript para a lógica.

Estrutura do Projeto
O projeto consiste em três arquivos principais:

index.html - Estrutura HTML da aplicação.
styles.css - Estilização opcional com CSS.
script.js - Lógica em JavaScript.
1. HTML (index.html)
O HTML define a estrutura básica da aplicação. Inclui um campo de entrada para os itens da lista, um botão para adicionar itens, e uma lista não ordenada para exibir os itens.

html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Compras</title>
</head>
<body>
    <div>
        <h1>Lista de Compras</h1>
        <input type="text" id="itemInput" placeholder="Novo item">
        <button id="addItemBtn">Adicionar Item</button>
        <ul id="shoppingList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
Explicação dos Elementos HTML
<input type="text" id="itemInput" placeholder="Novo item">: Campo de texto onde o usuário pode digitar o item a ser adicionado.
<button id="addItemBtn">Adicionar Item</button>: Botão que, quando clicado, adiciona o item digitado à lista.
<ul id="shoppingList"></ul>: Lista não ordenada onde os itens adicionados serão exibidos.
2. CSS (styles.css)
O CSS é opcional e utilizado para estilizar a aplicação, tornando-a visualmente mais agradável.

css
Copiar código
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

div {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
}

button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
}
3. JavaScript (script.js)
O JavaScript contém a lógica para adicionar e exibir itens na lista de compras.

javascript
Copiar código
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
Explicação do Código JavaScript
Carregar DOM:

document.addEventListener('DOMContentLoaded', () => { ... });: Garante que o código JavaScript será executado apenas após o carregamento completo do DOM.
Seleção de Elementos:

const itemInput = document.getElementById('itemInput');: Seleciona o campo de entrada de texto.
const addItemBtn = document.getElementById('addItemBtn');: Seleciona o botão de adicionar item.
const shoppingList = document.getElementById('shoppingList');: Seleciona a lista onde os itens serão exibidos.
Array de Itens:

let items = [];: Inicializa um array vazio para armazenar os itens da lista de compras.
Adicionar Item:

addItemBtn.addEventListener('click', addItem);: Adiciona um evento de clique ao botão que chama a função addItem.
function addItem() { ... }: Função que adiciona um novo item ao array items.
const itemText = itemInput.value.trim();: Obtém o texto do campo de entrada, removendo espaços em branco no início e no fim.
if (itemText) { ... }: Verifica se o campo de entrada não está vazio.
items.push(itemText);: Adiciona o item ao array.
itemInput.value = '';: Limpa o campo de entrada.
renderItems();: Chama a função para atualizar a exibição dos itens.
Renderizar Itens:

function renderItems() { ... }: Função que exibe os itens na lista.
shoppingList.innerHTML = '';: Limpa a lista atual.
items.forEach(item => { ... });: Itera sobre o array items.
const li = document.createElement('li');: Cria um novo elemento de lista <li>.
li.textContent = item;: Define o texto do elemento <li>.
shoppingList.appendChild(li);: Adiciona o elemento <li> à lista.
Conclusão
Este desafio ajuda a praticar a manipulação de arrays e elementos DOM básicos com JavaScript, além de reforçar conhecimentos em HTML e CSS. É um exemplo simples mas eficaz de como criar uma aplicação web interativa usando tecnologias front-end.