let todos = [
	{
		id: 1,
		title: "Learn JavaScript",
		completed: false,
	},
	{
		id: 2,
		title: "Learn HTML",
		completed: false,
	},
	{
		id: 3,
		title: "Learn CSS",
		completed: false,
	},
	{
		id: 4,
		title: "Learn GO",
		completed: true,
	},
	{
		id: 5,
		title: "Learn Rust",
		completed: true,
	},
];

const todoList = document.getElementById("list");

const pendingCounter = document.getElementById("pending-count");
const completedCounter = document.getElementById("completed-count");

function showTodos(todos) {
	let completed = 0;

	todos.forEach((todo) => {
		if (todo.completed) {
			completed++;
		}

		todoList.innerHTML += `

        `;
	});

	let pending = todos.length - completed;

	pendingCounter.innerText = pending;
	completedCounter.innerText = completed;
}

showTodos(todos);
