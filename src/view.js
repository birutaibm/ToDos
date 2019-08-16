const list = document.querySelector("#app ul");
const form = document.querySelector("#app form");
const input = document.querySelector("#app form input");
const button = document.querySelector("#app form button");

const View = {
  onRemove: function(todo){},
  onFireNewTask: function(todo) {},
  add: function (todo) {
    var listElement = document.createElement("li");
    var text = document.createElement("div");
    text.appendChild(document.createTextNode(todo));
    var remove = createRemoveElement(todo, listElement);
    listElement.appendChild(text);
    listElement.appendChild(remove);
    list.appendChild(listElement);
    return listElement;
  },
}

button.onclick = function() {
  View.onFireNewTask(getNewTask());
}

form.onsubmit = function(e) {
  e.preventDefault();
  button.onclick();
}

function createRemoveElement(todo, listElement) {
  const element = document.createElement("button")
  element.className = 'remove';
  const text = document.createTextNode('Excluir');
  element.appendChild(text);
  element.onclick = function() {
    View.onRemove(todo);
    listElement.remove();
  }
  return element;
}

function getNewTask() {
  const task = input.value;
  input.value = '';
  return task;
}
