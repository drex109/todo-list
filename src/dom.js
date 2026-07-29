export const renderProjects = (projectsData) => {
    const projectContainer = document.querySelector('#projects');
    for (let i = 0; i < projectsData.length; i++) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.setAttribute('data-uuid', projectsData[i].id);

        let projectTitle;
        if (projectsData[i].title.length >= 14) {
            projectTitle = document.createElement('h3')
        } else {
            projectTitle = document.createElement('h1');
        }
        projectTitle.classList.add('project-title');
        projectTitle.textContent = projectsData[i].title;
        project.appendChild(projectTitle);
        
        const projectTodos = document.createElement('div');
        projectTodos.classList.add('todos');
        let todosData = projectsData[i].todos;
        for (let i = 0; i < todosData.length; i++) {
            const todo = document.createElement('div');
            todo.classList.add('todo');
            todo.setAttribute('data-uuid', todosData[i].id)
            projectTodos.appendChild(todo);

            const todoTitle = document.createElement('h2');
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todosData[i].title;
            todo.appendChild(todoTitle);

            const todoDescription = document.createElement('p');
            todoDescription.classList.add('todo-description');
            todoDescription.textContent = todosData[i].description;
            todo.appendChild(todoDescription);

            const todoDue = document.createElement('p');
            todoDue.classList.add('due-date');
            todoDue.textContent = `Due Date: ${todosData[i].dueDate}`;
            todo.appendChild(todoDue);

            const todoPriority = document.createElement('p');
            todoPriority.classList.add('priority');
            todoPriority.textContent = `Priority: ${todosData[i].priority}`;
            todo.appendChild(todoPriority);

            const todoCheckbox = document.createElement('div');
            todoCheckbox.classList = 'complete-toggle'
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'check ' + todosData[i].id;
            check.classList = 'check'

            let haveCompleted = todosData[i].complete
            check.value = haveCompleted
            check.checked = haveCompleted;
            haveCompleted ? haveCompleted = 'Yes' : haveCompleted = 'No';

            const label = document.createElement('label');
            label.htmlFor = check.id;
            label.textContent = `Completed: ${haveCompleted}`;

            todoCheckbox.appendChild(check);
            todoCheckbox.appendChild(label);

            todo.appendChild(todoCheckbox)
            check.addEventListener('change', function(e) {
                todosData[i].toggleComplete();

                if(todosData[i].complete) {
                    label.textContent = 'Completed: Yes'
                } else {
                    label.textContent = 'Completed: No'
                }
                
                check.value = todosData[i].complete;
                console.log(todosData[i].complete)
            })
        }
        project.appendChild(projectTodos);

        projectContainer.appendChild(project)
    }
}