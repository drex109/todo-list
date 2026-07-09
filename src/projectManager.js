const projectManager = (() => {
    const projects = [];
    
    const addProject = (project) => {
        projects.push(project)
    }

    const readProjects = () => {
        return [...projects]
    }

    return { addProject, readProjects }
})()

export { projectManager }