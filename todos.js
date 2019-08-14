const list = document.querySelector("#app ul");
const input = document.querySelector("#app input");
const button = document.querySelector("#app button");

const todos = [];

function addTask(todo) {
    todos.push(todo);
    var listElement = document.createElement("li");
    var textElement = document.createTextNode(todo);
    var remove = createRemoveElement(todos.length - 1);
    listElement.appendChild(textElement);
    listElement.appendChild(remove);
    list.appendChild(listElement);
    return listElement;
}

function createRemoveElement(index) {
    const element = document.createElement("button")
    element.className = 'remove';
    const text = document.createTextNode('Excluir');
    element.appendChild(text);
    element.onclick = function() {
        todos.splice(index, 1);
        list.getElementsByTagName("li")[index].remove();
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
        const task = input.value;
        addTask(task);
        input.value = '';
        save();
    }
}

init();