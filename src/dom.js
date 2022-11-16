import { createEle, loop } from "./createElements"
import { manager } from './index'

// add projects to main page, where is where to append
export function addProjects(where, obj){
    
    // create a "box" for each project
    let box = createEle("div", "box", "")
    let list = createEle("ul", "list", obj.title)

    // add ul to box element
    box.append(list)

    // loop through outstanding tasks and get details
    obj.checkOutstanding().forEach( (task) => {
        let listitems = createEle('li', 'list-item', `Title: ${task.title}, description: ${task.desciption}, due: ${task.dueDate}`)
        box.append(listitems)
    })
    
    // add to body
    where.append(box)
}

export function loadSidebar(where, obj){
    // create a list
    let list = createEle("ul", "list", "Projects")

    // pass over each item and its title to the sidebar list
    obj.forEach( (project) => {
        let listitems = createEle('li', 'project-item', `${project.title}`, `${project.id}`)
        list.append(listitems)
    })

    // append to list
    where.append(list)
}


// load the to do list in the main content page
export function loadContent(where, id){

    // remove each child to avoid duplication
    while(where.firstChild){
        where.removeChild(where.lastChild)
    }

    // get the project that needs to be loaded.
    let toLoad = manager.list.filter( (item) => item.id == id)
    
    // check which tasks are outstanding
    let items = toLoad[0].checkOutstanding()

    // add each todo to content
    // need to improve how it loads
    items.forEach((toDo) => {
        // title, description, dueDate, 
        where.append(toDo.title)
        where.append(toDo.desciption)
        where.append(toDo.dueDate)
        where.append(" --------- ")
    })
    
}