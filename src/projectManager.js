const projectManager = (() => {
    const projects = [];
    
    const addProject = (project) => {
        projects.push(project)
    }

    const deleteProject = (id) => {
        const index = projects.findIndex(currentProject => currentProject.id === id);
        if (index !== -1) {
            projects.splice(index, 1);
            console.log('project deleted')
        } else {
            console.log('ERROR: no project by that id found')
        }
    }

    const readProjects = () => {
        return [...projects]
    }

    return { addProject, deleteProject, readProjects }
})()

export { projectManager }