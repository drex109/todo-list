import "./style.css";

const createTodo = (title, description, dueDate, priority, complete = false) => {
    return { 
        title,
        description,
        dueDate,
        priority,
        complete
    }
}

const lawn = createTodo('Mow Lawn', 'Lawn is overgrown and need mowing', '6/20/26', "high");
console.log(lawn);

const createProject = (name, todos = []) => {
    
    const addTodo = (todo) => {
        todos.push(todo);
    }

    const deleteTodo = (todo) => {
    
    }

    const editTodo = (todo) => {

    }

    return { name, addTodo, deleteTodo, editTodo }
}

const landscaping = createProject('Landscaping')
landscaping.addTodo(lawn)
console.log(landscaping)

const displayTodoList = () => {


}
