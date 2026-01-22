// main array
let todos = getTodos();
const todoList = document.getElementById("list");

const newTodoForm = document.getElementById("todo-form");
const newTodoTitle = document.getElementById("todo-input");

const pendingList = document.getElementById("sec-pending");
const completedList = document.getElementById("sec-completed");

const pendingCounter = document.getElementById("pending-count");
const completedCounter = document.getElementById("completed-count");

newTodoForm.onsubmit = function (e) {
	e.preventDefault();

	createTodo(newTodoTitle.value);
	newTodoTitle.value = "";
};

function deleteTodo(id) {
	const updatedTodos = todos.filter((todo) => todo.id !== id);
	todos = updatedTodos;
    showTodos(updatedTodos);
    saveTodos(todos)
}

function markComplete(id) {
	const updatedTodos = todos.map((todo) => {
		if (todo.id === id) {
			todo.completed = true;
		}
		return todo;
	});
	todos = updatedTodos;
    showTodos(updatedTodos);
    saveTodos(todos)
}

function createTodo(title) {
	let newTodo = {
		id: todos.length + 1,
		title,
        complete: false,
        createdAt: new Date()
	};
	todos.unshift(newTodo);
    showTodos(todos);
    saveTodos(todos)
}

function showTodos(todos) {
	completedList.innerHTML = "";
	pendingList.innerHTML = "";
	let completed = 0;

	todos.forEach((todo) => {
		if (todo.completed) {
			completed++;
			completedList.innerHTML += createTodoHtml(todo);
		} else {
			pendingList.innerHTML += createTodoHtml(todo);
		}
	});

    let pending = todos.length - completed;
    
    if (pending === 0) {
        pendingList.innerHTML = "No Todos"
    }

    if (completed === 0) {
        completedList.innerHTML = "No Todos"
    }


	pendingCounter.innerText = pending;
	completedCounter.innerText = completed;
}

function createTodoHtml(todo) {
	return `
        <div id="todo-${todo.id}" class="todo-item">
            <p class="todo-title">${todo.title}</p>

            <p>Created at: ${todo.createdAt}</p>

            <p class="todo-status">
                Status:
                ${
									todo.completed
										? '<span class="success">Completed</span>'
										: '<span class="warning">Pending</span>'
								}            
            </p>

            ${
							todo.completed
								? ""
								: `
                    <div class="todo-actions">
                        <div>
                            <label  for="checkbox-${todo.id}">Mark Completed</label>
                            <input
                                onclick="markComplete(${todo.id})"
                                ${todo.completed ? "disabled" : ""}
                                id="checkbox-${todo.id}"
                                ${todo.completed ? "checked" : ""}
                                type="checkbox"
                                class="complete-checkbox"
                            />
                        </div>
                        <button onclick="deleteTodo(${todo.id})"  class="delete-btn">Delete</button>
               </div>
            `
						}
		</div>    
    `;
}

showTodos(todos);
