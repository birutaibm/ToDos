const list = document.querySelector("#app ul");
const input = document.querySelector("#app form input");
const button = document.querySelector("#app form button");

const todos = [];

function addTask(todo) {
    todos.push(todo);
    var listElement = document.createElement("li");
    var textElement = document.createElement("div");
    textElement.appendChild(document.createTextNode(todo));
    var remove = createRemoveElement(todo, listElement);
    listElement.appendChild(textElement);
    listElement.appendChild(remove);
    list.appendChild(listElement);
    return listElement;
}

function createRemoveElement(todo, listElement) {
    const element = document.createElement("button")
    element.className = 'remove';
    const text = document.createTextNode('Excluir');
    element.appendChild(text);
    element.onclick = function() {
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        listElement.remove();
        save();
    }
    return element;
}

function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function init() {
    const saved = JSON.parse(localStorage.getItem('todos'));
    if (saved) {
        saved.forEach(addTask);
    }

    button.onclick = function() {
        onFireNewTask(getNewTask());
    }
}

function getNewTask() {
    const task = input.value;
    input.value = '';
    return task;
}

function onFireNewTask(todo) {
    addTask(todo);
    save();
}

init();