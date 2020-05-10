// Selectors
const todoInput = document.querySelector(".todo-input"),
  todoButton = document.querySelector(".todo-button"),
  todoList = document.querySelector(".todo-list"),
  filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

/**
 * Add an item to the todo list
 * @param {*} e event
 */
function addTodo(e) {
  e.preventDefault();

  // create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);

  // clear input field
  todoInput.value = "";
}

/**
 * Handle delete and comlpete button events
 * @param {*} e event
 */
function deleteCheck(e) {
  const item = e.target;
  console.log(item);

  // delete the todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // animtation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // mark as done
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

/**
 * Handles filter dropdown
 * @param {*} e event
 */
function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
