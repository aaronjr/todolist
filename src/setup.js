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
let proj = new Project("House", "", `${date}`);
let task = new Task("Spring clean", "", `${datez}`);
let task1 = new Task("Build shed", "Back garden",`${datez}`);
let task2 = new Task("Mow lawn", "Back garden",`${date}`);

// hide one task from first project
task2.outstanding = false

// create second project
let proj2 = new Project("Car", "", `${date}`)
let task21 = new Task("Clean", "", `${datez}`)
let task22 = new Task("Wheels", "Inflate 40psi", `${datez}`)

// add tasks to correct projects
proj.add(task)
proj.add(task1)
proj.add(task2)

proj2.add(task21)
proj2.add(task22)

export { proj, proj2}