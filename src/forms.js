import { createEle, loopForm } from "./createElements"
import { loadSidebar, addProjects } from "./dom"
import { manager } from "./index"
import { Project } from './project'
import { Task } from "./task"


export function addProjectForm(where, content){
    const form = createEle('form', 'addProjectForm', '')

    // list of needed items
    const formElements = [
        ['input', 'projectName', 'addProjectDetails',''],
        //['input', 'description', 'addProjectDetails',''],
        //['input', 'dueDate', 'addProjectDetails',''],
        ['button', '', 'addButton','Add'],
    ]

    // add items to form
    loopForm(formElements, form)

    // stop form submitting
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        let projectName = form.projectName.value
        let description = "new entry"
        let dueDate = "Now bitch"
        const project = new Project(projectName, description, dueDate)
        manager.add(project)
        loadSidebar(where, manager.checkOutstanding(), content)
    })

    // add to correct location
    where.append(form)
}

export function addTaskForm(content, projectId){
    // create a form
    const form = createEle('form', 'addTaskForm', '')

    // list of needed items
    const formElements = [
        ['input', 'TaskName', 'addTaskDetails',''],
        ['button', '', 'addTaskButton','Add'],
    ]

    // add items to form
    loopForm(formElements, form)

    
    form.addEventListener('submit', (e) =>{
        // stop form submitting
        e.preventDefault()

        // get values from form
        let taskName = form.TaskName.value
        let description = "new entry"
        let dueDate = "Now bitch"
        const task = new Task(taskName, description, dueDate)

        // Get this project and add task to it
        const thisProject = manager.list[projectId]
        thisProject.add(task)

        // pass through object
        addProjects(content, thisProject.checkOutstanding())
    })

    // add to correct location
    content.append(form)
}