
const inputTask = document.querySelector('input#new-task');
const buttonNewTask = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list')
// EVENT LISTENERS
// Botão ADD
buttonNewTask.addEventListener('click', (e) => {
    if(!inputTask.value) return

    addTask(inputTask.value)
    cleanInput();
    inputTask.focus();
})

// Tecla ENTER
inputTask.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputTask.value) return

        addTask(inputTask.value);
        cleanInput();
    }
})

// Botão remove
taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-button')) {
        e.target.parentElement.remove();
    }
})

// FUNÇÕES 
function addTask(taskName) {
    let li = document.createElement('li');
    li.innerHTML = `<p>${taskName}</p>`
    createButton(li)
    taskList.appendChild(li)
}

function createButton(element){
    let i = document.createElement('i');
    i.classList.add('material-symbols-outlined');
    i.classList.add('remove-button');
    i.innerHTML = 'remove';
    element.appendChild(i);
}

function cleanInput () {
    inputTask.value = '';
}

function saveTask () {
    const liTask = document.querySelectorAll('li');
    const listaDeTarefas = [];

    for(value of liTask) {
        console.log(value);
    }
}
saveTask()