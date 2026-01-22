function getTodos() {

    let todos = localStorage.getItem("todos");

    if (!todos) {
        return []
    }

    return JSON.parse(todos)
}


function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}