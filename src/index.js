import { format, addDays } from 'date-fns'
import { Project } from "./project";
import { Task  } from "./task";
import { Manager } from "./projectManager";
import { layout } from "./layout"
import './styles.css';

const newD = addDays(new Date(), 5)
const date = format(newD, 'MM/dd/yyyy')


let proj = new Project("Shop", "Shop in ASDA", `${date}`);
let task = new Task("Milk", "Green", `${date}`);
let task1 = new Task("Cheese", "Blue",`${date}`);

// hide one task
task.outstanding = false

let proj2 = new Project("Garden", "Carry out tonight", `${date}`)
let task2 = new Task("Mow", "Grass out of the back", `${date}`)
let task12 = new Task("Cut", "Tree", `${date}`)

proj.add(task)
proj.add(task1)

proj2.add(task2)
proj2.add(task12)

//console.log(window.localStorage)
// .removeItem('manager')

// function getData(){
//     let data = {}
//     if(window.localStorage.getItem("manager")){
//         let string = window.localStorage.getItem("manager")
//         const obj = JSON.parse(string)
//         data = new Manager
//         for(let i in obj){
//             console.log(data[i])
//         }
//         // console.log(data)
//     }
//     else{
//         // create holder of projects
//         data = new Manager
//     }
//     return data
// }

// const manager = getData()
const manager = new Manager
manager.add(proj)
manager.add(proj2)

// window.localStorage.setItem("manager", JSON.stringify(manager));

document.addEventListener('DOMContentLoaded', () => {
    layout()
})

export { manager }