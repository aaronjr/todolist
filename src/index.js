import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { layout } from "./layout"
import './styles.css';

let proj = new Project("Shop", "Shop in ASDA", "This week");
let task = new Task("Milk", "Green", "");
let task1 = new Task("Cheese", "Blue", "");

// hide one task
task.outstanding = false

let proj2 = new Project("Garden", "Carry out tonight", "Tonight")
let task2 = new Task("Mow", "Grass out of the back", "ASAP")
let task12 = new Task("Cut", "Tree", "soon")

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