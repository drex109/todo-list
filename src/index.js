import "./style.css";
import { createTodo } from "./todo";
import { createProject } from "./project";
import { projectManager } from "./projectManager";
import { renderProjects } from "./dom";

const lawn = createTodo('Mow Lawn', 'Lawn is overgrown and needs mowing', '2026', 'high');
const weeds = createTodo('Weed Garden', 'Garden is overrun by weeds', '2026', 'high');
const trim = createTodo('Trim Apple Tree', 'Apple Tree is due for its annual trim', '2026', 'high');
console.log(lawn);
const kill = createTodo('Kill', 'Get a single kill', '2026', 'low');

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
const watch = createTodo('Watch Nephews Play', 'Watch your nephews play various video games', '2026', 'low');
nephs.addTodo(watch);

projectManager.addProject(nephs)
// projectManager.deleteProject(nephs.id)

// const testOne = createProject('Test project');
// const testTodoOne = createTodo('Testing layout', 'Use methods to create new project with at least one todo for testing purposes', '2026', 'mid');
// testOne.addTodo(testTodoOne);
// projectManager.addProject(testOne);


// const testTwo = createProject('Test project');
// const testTodoTwo = createTodo('Testing layout', 'Use methods to create new project with at least one todo for testing purposes', '2026', 'mid');
// testTwo.addTodo(testTodoTwo);
// testTwo.deleteTodo(testTodoTwo.id);
// projectManager.addProject(testTwo);

console.log(projectManager.readProjects());

renderProjects(projectManager.readProjects());
