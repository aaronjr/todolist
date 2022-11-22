import { manager } from ".";
import { isWithinInterval, addDays, parseISO, format } from 'date-fns'
import { clear } from "./createElements";
import { loadSidebar } from "./dom";

export function inDiary(period){
    clear(document.querySelector('.content'))
    let list = []
    // loop through outstadning projects
    manager.checkOutstanding().forEach( (project) =>{
        // loop through tasks of each project
        project.checkOutstanding().forEach( (task) =>{
            
            // make a date from this expiry, today and last day needed
            const thisDate = format(parseISO(task.dueDate), 'dd/MM/yyyy')
            const today = format(new Date(1), 'dd/MM/yyyy')
            const lastDay = format(addDays(new Date(1), period),'dd/MM/yyyy')
            
            // check if within range
            if ( isWithinInterval(thisDate,{ start: today, end: lastDay}) ){
                // add objects to a list with project and task id
                list.push({
                    'project' : project.id,
                    'task': task.id
                })
            }
            
        })
    })
    getDiaryItems(list)
}

// takes list of objects
export function getDiaryItems(list){
    
    list.forEach((item) =>{
        let task = manager.list[`${item.project}`].list[`${item.task}`]
        console.log(task.title, task.description, task.dueDate)
    })

}
