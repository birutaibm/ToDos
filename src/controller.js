function remove(todo) {
  Model.removeTask(todo);
  save();
}

function addTask(todo) {
  Model.addTask(todo);
  View.add(todo);
}

function save() {
  localStorage.setItem('todos', Model.asString());
}

function fireNewTask(todo) {
  addTask(todo);
  save();
}

function init() {
  View.onRemove = remove;
  View.onFireNewTask = fireNewTask;
  Model.fromString(localStorage.getItem('todos'));
}

init();