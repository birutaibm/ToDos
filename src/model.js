const todos = [];

const Model = {
  addTask: function(todo) {
    todos.push(todo);
  },
  removeTask: function(todo) {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
  },
  fromString: function(str) {
    if (str) {
      JSON.parse(str).forEach(todo => {
        addTask(todo);
      });
    }
  },
  asString: function() {
    return JSON.stringify(todos);
  }
};