import "./style.css";

const createTodo = (title, description, dueDate, priority, complete = false, id = crypto.randomUUID()) => {
    return { 
        title,
        description,
        dueDate,
        priority,
        complete,
        id
    }
}

const lawn = createTodo('Mow Lawn', 'Lawn is overgrown and need mowing', '6/20/26', 'high');
const weeds = createTodo('Weed Garden', 'Garden is overrun by weeds', '6/24/2026', 'high');
const trim = createTodo('Trim Apple Tree', 'Apple Tree is due for its annual trim', '6/24/2026', 'high');
console.log(lawn);

const projects = [];
const createProject = (name, todos = []) => {
    
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

    projects.push(this)

    return { name, todos, addTodo, deleteTodo, editTodo }
    
}

const landscaping = createProject('Landscaping')
landscaping.addTodo(lawn)
landscaping.addTodo(weeds)
landscaping.addTodo(trim)
console.log(landscaping)

landscaping.deleteTodo(weeds.id)
console.log(landscaping)
console.log(projects)

const displayProjects = () => {


}
