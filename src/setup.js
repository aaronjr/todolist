import { format, addDays } from 'date-fns'
import { Project } from "./project";
import { Task  } from "./task";

// set up todays date in correct format
const newD = addDays(new Date(), 5)
const date = format(newD, 'yyyy-MM-dd')

// add days functions
const OD = addDays(new Date(), 0)
const datez = format(OD, 'yyyy-MM-dd')

//  create first project
let proj = new Project("Shop", "Shop in ASDA", `${date}`);
let task = new Task("Milk", "Green", `${datez}`);
let task1 = new Task("Cheese", "Blue",`${datez}`);

// hide one task from first project
task.outstanding = false

// create second project
let proj2 = new Project("Garden", "Carry out tonight", `${date}`)
let task2 = new Task("Mow", "Grass out of the back", `${date}`)
let task12 = new Task("Cut", "Tree", `${date}`)

proj.add(task)
proj.add(task1)

proj2.add(task2)
proj2.add(task12)

export { proj, proj2}