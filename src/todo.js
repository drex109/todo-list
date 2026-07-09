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

export { createTodo }