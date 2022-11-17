import { createEle, loop, createFormEle, loopForm} from "./createElements"
import { manager } from "./index"
import { addProjects, loadSidebar, getTasks } from "./dom"
import { addProjectForm } from "./forms"

const body = document.querySelector('body')

const mainStructure = [
    ['nav','nav',''],
    ['div','side',''],
    ['div','content',''],
]

export function layout(){
    // loop through list and add to body
    loop(mainStructure, body)

    // get back these items
    const nav = document.querySelector('.nav')
    const side = document.querySelector('.side')
    const content = document.querySelector('.content')

    // add title to page
    nav.append(createEle('h1', 'title', 'To do list'))

    // load sidebar pass all available objects
    loadSidebar(side, manager.checkOutstanding())
    // button for sidebar
    let addProjectButton = createEle('button', 'addProject', '+')
    side.append(addProjectButton)
    addProjectButton = document.querySelector('.addProject')
    addProjectButton.addEventListener('click', () => {
        if(!(document.querySelector('.addProjectForm'))){
            addProjectForm(side)
        }
    })

    // get back items and add event listeners
    // using event listeners load the todo list of each project
    const projectTitles = document.querySelectorAll('.project-item')
    projectTitles.forEach( (item) => {
        item.addEventListener('click', () => {
            // pass the id number and the node of where
            // the content should be loaded ".content"
            getTasks(content, item.getAttribute("id"))

            // loader header to top of content page
            // can't add inside function as it'll duplicate
            // or be erased when clearing children.
            content.append(createEle('p', 'projectTitle', `${item.textContent}`))
        })
    })
}
