import { projectManager } from "./projectManager"

export const renderProjects = (projectsData) => {
    const projectContainer = document.querySelector('#projects');
    for (let i = 0; i < projectsData.length; i++) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.setAttribute('data-uuid', projectsData[i].id);

        let name = document.createElement('h1');
        name.classList.add('name');
        name.textContent = projectsData[i].name;
        project.appendChild(name);
        
        let todos = document.createElement('ul');
        todos.classList.add('todos');
        for (let i = 0; i < projectsData[i].todos.length; i++) {
            console.log('yorp');
        }
        project.appendChild(todos);

        projectContainer.appendChild(project)
    }
}


const renderTodos = () => {

    
}