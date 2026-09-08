import { projectManager } from "./projectManager";
import { createProject } from "./project";

const dialog = document.querySelector('dialog');
const openDialog = document.querySelector('#open-dialog');
const closeDialog = document.querySelector('#close-dialog');
const projectForm = document.querySelector('#new-project');

openDialog.addEventListener('click', function() {
    dialog.showModal();
})
closeDialog.addEventListener('click', function() {
    dialog.close();
})

projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('SUBMIT')
    const formData = Object.fromEntries(new FormData(projectForm));
    const submittedProject = createProject(formData.formProjectTitle);
    projectManager.addProject(submittedProject);
    renderProjects(projectManager.readProjects());
})


export const renderProjects = (projectsData) => {
    const projectContainer = document.querySelector('#projects');
    projectContainer.replaceChildren();

    for (let projectIndex = 0; projectIndex < projectsData.length; projectIndex++) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.setAttribute('data-uuid', projectsData[projectIndex].id);

        let projectTitle;
        if (projectsData[projectIndex].title.length >= 14) {
            projectTitle = document.createElement('h3')
        } else {
            projectTitle = document.createElement('h1');
        }
        projectTitle.classList.add('project-title');
        projectTitle.textContent = projectsData[projectIndex].title;
        project.appendChild(projectTitle);

        const projectEditButton = document.createElement('button');
        projectEditButton.classList.add('edit');
        projectEditButton.textContent = 'Edit';

        
        const projectTodos = document.createElement('div');
        projectTodos.classList.add('todos');
        let todosData = projectsData[projectIndex].todos;
        for (let todosIndex = 0; todosIndex < todosData.length; todosIndex++) {
            const todo = document.createElement('div');
            todo.classList.add('todo');
            todo.setAttribute('data-uuid', todosData[todosIndex].id)
            projectTodos.appendChild(todo);

            const todoTitleCon = document.createElement('div');
            todoTitleCon.classList.add('todo-title-container');

            let todoTitle;
            if (todosData[todosIndex].title.length <= 8) {
                todoTitle = document.createElement('h2');
            } else {
                todoTitle = document.createElement('h4');
            }
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todosData[todosIndex].title;
            todoTitleCon.appendChild(todoTitle);

            const todoDeleteButton = document.createElement('button');
            todoDeleteButton.classList.add('delete-todo');
            todoDeleteButton.setAttribute('title', 'Delete todo');
            todoDeleteButton.textContent = 'X';
            
            todoDeleteButton.addEventListener('click', function(e) {
                projectsData[projectIndex].deleteTodo(
                    e.target.closest('.todo').dataset.uuid
                );

                if (todosData.length === 0) {
                    projectManager.deleteProject(
                        e.target.closest('.project').dataset.uuid)
                    console.log(projectsData);
                    console.log(projectManager.readProjects())
                } 

                renderProjects(projectManager.readProjects());
                console.log(todosData)
            });

            todoTitleCon.appendChild(todoDeleteButton);
            
            todo.appendChild(todoTitleCon);

            const todoDescription = document.createElement('p');
            todoDescription.classList.add('todo-description');
            todoDescription.textContent = todosData[todosIndex].description;
            todo.appendChild(todoDescription);

            const todoDue = document.createElement('p');
            todoDue.classList.add('due-date');
            todoDue.textContent = `Due Date: ${todosData[todosIndex].dueDate}`;
            todo.appendChild(todoDue);

            const todoPriority = document.createElement('p');
            todoPriority.classList.add('priority');
            todoPriority.textContent = `Priority: ${todosData[todosIndex].priority}`;
            todo.appendChild(todoPriority);

            const todoCheckbox = document.createElement('div');
            todoCheckbox.classList = 'complete-toggle'
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'check ' + todosData[todosIndex].id;
            check.classList = 'check'

            let haveCompleted = todosData[todosIndex].complete
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
                todosData[todosIndex].toggleComplete();

                if(todosData[todosIndex].complete) {
                    label.textContent = 'Completed: Yes'
                } else {
                    label.textContent = 'Completed: No'
                }
                
                check.value = todosData[todosIndex].complete;
                console.log(todosData[todosIndex].complete)
            })
        }
        project.appendChild(projectTodos);

        projectContainer.appendChild(project)
    }
}