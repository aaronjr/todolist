import { createEle, loop, clear } from "./createElements"
import { manager } from './index'
import { addProjectForm, addTaskForm, editProjectForm, editTaskForm, completeTask } from "./forms"

// add projects to content section, list of objects and parent id
export function addProjects(objs, projectId){

    // get content
    const content = document.querySelector('.content')

    // empty content box
    clear(content)

    // box to hold project info
    const projectDetailsDiv = createEle('div', 'projectDetailsDiv', '')

    const tasks = getTasks(projectId)
    // add project name to page
    const projectDetails = [
        ['h1', 'projectTitle', `${tasks.title}`],
        ['p', 'projectDescription', `${tasks.description}`],
        ['p', 'projectDueDate', `${tasks.dueDate}`],
        ['button', 'editProject', 'Edit project']
    ]

    // add details to div add div to content
    loop(projectDetails, projectDetailsDiv)
    content.append(projectDetailsDiv)

    // button to edit this projects details
    const editProject = document.querySelector('.editProject')
    editProject.addEventListener('click', () => {
        editProjectForm(manager.list[projectId])
        editProject.style.display = 'none'
    })
    
    // loop through list of tasks
    objs.list.forEach( (obj) => {

        // create a "box" for each task
        let box = createEle("div", "box", "", obj.id)
        let list = createEle("ul", `${obj.id}task-list task-list`, obj.title)

        let listitems = [
            ['li', 'list-item', `Description: ${obj.description}`,''],
            ['li', 'list-item', `Due: ${obj.dueDate}`,''],
        ]

        // buttons
        let edit = createEle('button', 'editTaskButton', 'Edit task', obj.id)
        let complete = createEle('button', 'editCompleteButton', 'complete task', obj.id)
        
        edit.addEventListener('click', () => {
            if(!(document.querySelector('.editTaskForm'))){
                // load the correct todo list from the projects
                clear(box)
                editTaskForm(box, projectId, edit.id)
            }
        })

        // mark task as complete
        complete.addEventListener('click', ()=>{
            completeTask(projectId, edit.id)
        })

        // add ul to box element
        box.append(list)

        // add to body and box div
        loop(listitems, list)
        list.append(edit)
        list.append(complete)

        // add divs to ".content"
        content.append(box)

    })

    // add task button
    let addTask = createEle('button', 'addTask', 'Add task')
    addTask.addEventListener('click', () => {
        if(!(document.querySelector('.addTaskForm'))){
            addTaskForm(content, projectId)
            addTask.style.display = 'none'
        }
    })
    // add button to page
    content.append(addTask)
}

export function loadSidebar(){

    // get update list of projects
    const objs = manager.checkOutstanding()

    // get content and side
    const side = document.querySelector('.side')

    // remove each child to avoid duplication from content box
    clear(side)

    // create a Node list
    let list = createEle("ul", "list", "Projects")

    // pass over each item and add its title to the sidebar list
    objs.forEach( (project) => {
        list.append(createEle('li', 'project-item', `${project.title}`, `${project.id}`))
    })

    // append to list
    side.append(list)

    // button for sidebar, add event listener and add to page
    let addProjectButton = createEle('button', 'addProject', '+')
    addProjectButton.addEventListener('click', () => {
        if(!(document.querySelector('.addProjectForm'))){
            // load the correct todo list from the projects
            addProjectButton.style.display = "none"
            addProjectForm(side)
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
            addProjects(getTasks(item.getAttribute("id")), item.getAttribute("id"))
        })
    })
}

// find the correct project
export function getTasks(id){
    // get the project that needs to be loaded.
    let thisProject = manager.list[id]
    return thisProject
}