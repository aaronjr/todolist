import { format, addDays } from 'date-fns'
import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { layout } from "./layout"
import './styles.css';

const newD = addDays(new Date(), 5)
const date = format(newD, 'yyyy-MM-dd')

const OD = addDays(new Date(), 0)
const datez = format(OD, 'yyyy-MM-dd')

let proj = new Project("Shop", "Shop in ASDA", `${date}`);
let task = new Task("Milk", "Green", `${datez}`);
let task1 = new Task("Cheese", "Blue",`${datez}`);

// hide one task
task.outstanding = false

let proj2 = new Project("Garden", "Carry out tonight", `${date}`)
let task2 = new Task("Mow", "Grass out of the back", `${date}`)
let task12 = new Task("Cut", "Tree", `${date}`)

proj.add(task)
proj.add(task1)

proj2.add(task2)
proj2.add(task12)



document.addEventListener('DOMContentLoaded', () => {
    layout()
})

const manager = new Manager
manager.add(proj)
manager.add(proj2)

localStorage.setItem('manager', JSON.stringify(manager));
let data = JSON.parse(localStorage.getItem('manager'));

for(let object in data.list.length){
    console.log(data.list[object].list)
}

export { manager }