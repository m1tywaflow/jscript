window.onload = function () {
  document.querySelector(`#save`).addEventListener(`click`, function () {
    let textValue = document.querySelector(`#inputText`).value;
    window.sessionStorage.setItem(`my text`, textValue);
  });
  document.querySelector(`#show`).addEventListener(`click`, function () {
    let savedText = window.sessionStorage.getItem(`my text`);
    document.querySelector(`#output`).textContent = savedText;
  });
  const form = document.getElementById("settings-form");
  const backgroundColorSelect = document.getElementById("background-color");

  // Зміна кольор фону
  const savedColor = localStorage.getItem("backgroundColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    backgroundColorSelect.value = savedColor;
  }

  // Збережений вибір в locatstorage
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const color = backgroundColorSelect.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  });
  // To-do list
  let todoForm = document.getElementById("todo-form");
  let todoInput = document.getElementById("todo-input");
  let todoList = document.getElementById("todo-list");
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    todoList.innerHTML = "";
    for (let i = 0; i < savedTasks.length; i++) {
      let li = document.createElement("li");
      li.textContent = savedTasks[i];

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = (function (index) {
        return function () {
          deleteTask(index);
        };
      })(i);

      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  }

  function deleteTask(index) {
    savedTasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
  }

  function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  }

  todoForm.onsubmit = function (e) {
    e.preventDefault();
    let newTask = todoInput.value.trim();
    if (newTask) {
      savedTasks.push(newTask);
      updateLocalStorage();
      renderTasks();
      todoInput.value = "";
    }
  };

  renderTasks();
};
