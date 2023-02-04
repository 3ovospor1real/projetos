
const inputItem = document.querySelector('input#new-task');
const buttonNewItem = document.querySelector('.add-button');
const itemList = document.querySelector('.task-list')
// EVENT LISTENERS
// Botão ADD
buttonNewItem.addEventListener('click', (e) => {
    if(!inputItem.value) return

    addItem(inputItem.value)
    cleanInput();
    saveItem();
    inputItem.focus();
})

// Tecla ENTER
inputItem.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputItem.value) return

        addItem(inputItem.value);
        cleanInput();
        saveItem();
    }
})

// Botão remove
itemList.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-button')) {
        e.target.parentElement.remove();
        saveItem()
    }
})

// FUNÇÕES 
function addItem(itemName) {
    let li = document.createElement('li');
    li.innerHTML = `<p>${itemName}</p>`
    createButton(li)
    itemList.appendChild(li)
}

function createButton(element){
    let i = document.createElement('i');
    i.classList.add('material-symbols-outlined');
    i.classList.add('remove-button');
    i.innerHTML = 'remove';
    element.appendChild(i);
}

function cleanInput () {
    inputItem.value = '';
}

function saveItem () {
    const lis = document.querySelectorAll('li');
    const listaDosItens = [];

    for(value of lis) {
        let texto = value.innerText;
        texto = texto.replace('remove','').trim();
        listaDosItens.push(texto);
    }
    console.log(listaDosItens)

    const tarefaJson = JSON.stringify(listaDosItens)
    localStorage.setItem('tarefas', tarefaJson)

}

function loadItens () {
    let tarefas = localStorage.getItem('tarefas');
    let listaTarefas = JSON.parse(tarefas);
    for (const item of listaTarefas) {
        addItem(item);
    }
}
loadItens()