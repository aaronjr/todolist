import { createEle, loop } from "./createElements"

// get body
const body = document.querySelector('body')

// add projects to main page
export function addProjects(obj){
    
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
    body.append(box)
}
