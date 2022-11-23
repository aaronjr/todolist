import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { layout } from "./layout"
import { proj, proj2 } from './setup'
import './styles.css';

// clear storage
// localStorage.clear();

// onload load page
document.addEventListener('DOMContentLoaded', () => {
    layout()
})

// initialize manager
let manager

// see if already in storage
if ((localStorage.getItem('manager'))){

    // get item
    let data = JSON.parse(localStorage.getItem('manager'));

    // loop through and add items from strings into the correct Classes
    manager = new Manager
    for (let i in data.list){   
        let project = data.list[i]
        const projectNew = new Project(project.title, project.description, project.dueDate, project.outstanding)
        project.list.forEach((task)=>{
            const taskNew = new Task(task.title, task.description, task.dueDate, task.outstanding)
            projectNew.add(taskNew)
        })
        manager.add(projectNew)
    }
}
// if not found create new manager and add in the premade projects and tasks
else{
    manager = new Manager
    manager.add(proj)
    manager.add(proj2)
}

// update to local storage when users closes page
window.addEventListener("beforeunload", () => {   
    localStorage.setItem('manager', JSON.stringify(manager));
 });

export { manager }