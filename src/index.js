import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { layout } from "./layout"
import './styles.css';

let proj = new Project("shop", "carry out early morning", "tomorrow");
let task = new Task("milk", "green", "ASAP");
let task1 = new Task("cheese", "blue", "ASAP");

// hide one task
task.outstanding = false

let proj2 = new Project("garden", "carry out tonight", "tonight")
let task2 = new Task("mow", "grass", "ASAP")
let task12 = new Task("cut", "tree", "soon")

// create holder of projects
const manager = new Manager

proj.add(task)
proj.add(task1)

proj2.add(task2)
proj2.add(task12)

manager.add(proj)
manager.add(proj2)

document.addEventListener('DOMContentLoaded', () => {
    layout()
})

export { manager }