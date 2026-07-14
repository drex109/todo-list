const createProject = (title, todos = [], id = crypto.randomUUID()) => {
    
        const addTodo = (todo) => {
            todos.push(todo);
        }

        const deleteTodo = (id) => {
            const index = todos.findIndex(currentTodo => currentTodo.id === id);
            if (index !== -1) {
                todos.splice(index, 1);
                console.log('todo deleted')
            } else {
                console.log('ERROR: no todo by that id found')
            }
        }

        const editTodo = (todo) => {

        }

        const completeTodo = (todo) => {
            todo.complete = true;
        }

        return { title, todos, id, addTodo, deleteTodo, editTodo, completeTodo }
    
}

export { createProject }