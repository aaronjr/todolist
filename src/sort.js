import { manager } from ".";
import { isWithinInterval, addDays } from 'date-fns'
import { clear } from "./createElements";

export function inWeek(){


    let list = []
    // loop through outstadning projects
    manager.checkOutstanding().forEach(project =>{
        // loop through tasks of each project
        project.checkOutstanding().forEach( task =>{

            // make a date from this expiry
            const thisDate = new Date(task.dueDate.toString())

            // check if within a week of today
            if ( isWithinInterval(thisDate,{
                start: new Date(),
                end: addDays(new Date(), 8)})
            )
            {
                // add objects to a list with project and task id
                list.push({
                    'project' : project.id,
                    'task': task.id
                })
            }
        })
    })
    // pass list of items within the next week
    getItems(list)
}

// takes list of objects
export function getItems(list){
    
    list.forEach((item) =>{
        const task = manager.list[`${item.project}`].list[`${item.task}`]
        console.log(task.title, task.description, task.dueDate)
    })

    
}