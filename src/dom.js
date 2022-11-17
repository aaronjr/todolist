import { createEle, loop } from "./createElements"
import { manager } from './index'

// add projects to main page, where is where to append
export function addProjects(where, obj){

    // create a "box" for each task
    let box = createEle("div", "box", "")
    let list = createEle("ul", "task-list", obj.title)

    let listitems = [
        ['li', 'list-item', `Description: ${obj.desciption}`],
        ['li', 'list-item', `Due: ${obj.dueDate}`]
    ]
   
    // add ul to box element
    box.append(list)

    // add to body and box div
    loop(listitems, box)

    // add divs to "where"
    where.append(box)
}

export function loadSidebar(where, objs){
    // create a list
    let list = createEle("ul", "list", "Projects")

    // pass over each item and its title to the sidebar list
    objs.forEach( (project) => {
        list.append(createEle('li', 'project-item', `${project.title}`, `${project.id}`))
    })

    // append to list
    where.append(list)
}

// find the correct project
export function getTasks(where, id){

    // remove each child to avoid duplication from content box
    while(where.firstChild){
        where.removeChild(where.lastChild)
    }

    // get the project that needs to be loaded.
    let toLoad = manager.list[id]

    // add each todo to content div
    toLoad.checkOutstanding().forEach((toDo) => {
        // pass through each item and where to append
        addProjects(where, toDo)
    })
    
}