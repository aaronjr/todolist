import { createEle, loop } from "./createElements"
import { manager } from './index'
import { addProjectForm, addTaskForm, editProjectForm } from "./forms"

// add projects to content section, where is where to append
export function addProjects(content, objs, projectId){

    // empty content box
    while(content.firstChild){
        content.removeChild(content.lastChild)
    }

    // add project name to page
    const projectDetails = [
        ['h1', 'projectTitle', `${manager.list[projectId].title}`],
        ['p', 'projectDescription', `${manager.list[projectId].description}`],
        ['p', 'projectDueDate', `${manager.list[projectId].dueDate}`],
        ['button', 'editProject', 'Edit project']
    ]
    loop(projectDetails, content)

    const editProject = document.querySelector('.editProject')
    editProject.addEventListener('click', () => {
        editProjectForm(content, manager.list[projectId])
        editProject.style.display = 'none'
    })
    
    
    objs.forEach( (obj) => {
        // console.log(obj.id)
        // create a "box" for each task
        let box = createEle("div", "box", "", obj.id)
        let list = createEle("ul", "task-list", obj.title)

        let listitems = [
            ['li', 'list-item', `Description: ${obj.desciption}`],
            ['li', 'list-item', `Due: ${obj.dueDate}`]
        ]

        // add ul to box element
        box.append(list)

        // add to body and box div
        loop(listitems, box)

        // add divs to ".content"
        content.append(box)
    })
    

    let addTask = createEle('button', 'addTask', 'Add task')
    addTask.addEventListener('click', () => {
        if(!(document.querySelector('.addTaskForm'))){
            addTaskForm(content, projectId)
            addTask.style.display = 'none'
        }
    })

    content.append(addTask)
}

export function loadSidebar(side, objs, content){

    // remove each child to avoid duplication from content box
    while(side.firstChild){
        side.removeChild(side.lastChild)
    }

    // create a Node list
    let list = createEle("ul", "list", "Projects")

    // pass over each item and add its title to the sidebar list
    objs.forEach( (project) => {
        list.append(createEle('li', 'project-item', `${project.title}`, `${project.id}`))
    })

    // append to list
    side.append(list)

    // create  a button and form
    // button for sidebar, add event listener and add to page
    let addProjectButton = createEle('button', 'addProject', '+')
    addProjectButton.addEventListener('click', () => {
        if(!(document.querySelector('.addProjectForm'))){
            // load the correct todo list from the projects
            addProjectButton.style.display = "none"
            addProjectForm(side, content)
        }
    })
    side.append(addProjectButton)

    // get back items and add event listeners
    // using event listeners load the todo list of each project
    const projectTitles = document.querySelectorAll('.project-item')
    projectTitles.forEach( (item) => {
        item.addEventListener('click', () => {
            // pass the id number and the node of where
            // the content should be loaded ".content"
            getTasks(content, item.getAttribute("id"))
        })
    })
}

// find the correct project
export function getTasks(where, id){

    // remove each child to avoid duplication from content box
    while(where.firstChild){
        where.removeChild(where.lastChild)
    }

    // get the project that needs to be loaded.
    let thisProject = manager.list[id]

    // pass through each item and where to append
    addProjects(where, thisProject.checkOutstanding(), id)
}