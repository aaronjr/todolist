import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { createProject } from "./dom"
import './styles.css';

let proj = new Project("shop", "carry out early morning", "tomorrow");
let task = new Task("milk", "green", "ASAP");
let task1 = new Task("cheese", "blue", "ASAP");

// allows edit of details
// task.edit("id", 10)
// task.edit("title", 10000)

let proj2 = new Project("garden", "carry out early morning", "tomorrow")
let task2 = new Task("mow", "grass", "ASAP")
let task12 = new Task("cut", "tree", "ASAP")

// create holder of projects
const manager = new Manager

proj.add(task)
proj.add(task1)

proj2.add(task2)
proj2.add(task12)

// proj.list.forEach((item)=>console.log(item.title))
// proj2.list.forEach((item)=>console.log(item.title))

proj2.list.forEach((item)=>item.dueDate = "Complete")

// console.log(proj2.oustanding())

manager.add(proj)
manager.add(proj2)

manager.list.forEach((proj) =>{
    createProject(proj)
    proj.list.forEach((task) => {
        // console.log(`Task: ${task.title}`)
    })
})