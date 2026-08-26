import "./style.css";
import { createTodo } from "./todo";
import { createProject } from "./project";
import { projectManager } from "./projectManager";
import { renderProjects } from "./dom";

const lawn = createTodo('Mow Lawn', 'Lawn is overgrown and needs mowing', '7/20/26', 'high');
const weeds = createTodo('Weed Garden', 'Garden is overrun by weeds', '7/24/2026', 'high');
const trim = createTodo('Trim Apple Tree', 'Apple Tree is due for its annual trim', '7/24/2026', 'high');
console.log(lawn);
const kill = createTodo('Kill', 'Get a single kill', '7/26/2026', 'low');

const landscaping = createProject('Landscaping');
landscaping.addTodo(lawn);
landscaping.addTodo(weeds);
landscaping.addTodo(trim);

projectManager.addProject(landscaping);
console.log(landscaping);

landscaping.deleteTodo(weeds.id)
console.log(landscaping)

landscaping.completeTodo(lawn);

const assassinate = createProject('Assassinate');
assassinate.addTodo(kill);

projectManager.addProject(assassinate);

const nephs = createProject('Play games with Nephews');
const watch = createTodo('Watch Nephews Play', 'Watch your nephews play various video games', '7/29/2026', 'low');
nephs.addTodo(watch);

projectManager.addProject(nephs)
// projectManager.deleteProject(nephs.id)

console.log(projectManager.readProjects());

// todoDeleteButton.addEventListener('click', function(e) {
//     projectsData[i].deleteTodo(todosData[i].id);
// })

renderProjects(projectManager.readProjects());
