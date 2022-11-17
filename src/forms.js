import { createEle, loopForm } from "./createElements"
import { loadSidebar, addProjects } from "./dom"
import { manager } from "./index"
import { Project } from './project'
import { Task } from "./task"

export function addProjectForm(where, content){
    const form = createEle('form', 'addProjectForm', '')
    sideDiv = where
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
        addProjects(content, thisProject.checkOutstanding(), projectId)
    })

    // add to correct location
    content.append(form)
}

export function editProjectForm (content, project) {

    // create a form
    const form = createEle('form', 'editProjectForm', '')

    // (tag,  name, className = "", inner = "", value = "" , forlabel = "", id="")

    // list of needed items
    const formElements = [
        // label and input for name
        ['label', '', '', 'Title', '', 'TaskName', ''],
        ['input', 'TaskName', 'addTaskDetails','', `${project.title}`, '', 'TaskName'],
        // label and input for description
        ['label', '', '', 'Description', '', 'TaskDescription', ''],
        ['input', 'TaskDescription', 'addTaskDetails','', `${project.description}`, '', 'TaskDescription'],
        // label and input for date
        ['label', '', '', 'Due', '', 'TaskDue', ''],
        ['input', 'TaskDue', 'addTaskDue','', `${project.dueDate}`, '', 'TaskDue'],
        // button
        ['button', '', 'addTaskButton','Confirm changes'],
    ]

    loopForm(formElements, form)

    form.addEventListener('submit', (e) => {

        // prevent submit
        e.preventDefault()

        // get details from form
        let newTitle = form.TaskName.value
        let newDes = form.TaskDescription.value
        let newDate = form.TaskDue.value

        // get correct project
        const thisProject = manager.list[project.id]

        // update details
        thisProject.edit('title', newTitle)
        thisProject.edit('description', newDes)
        thisProject.edit('dueDate', newDate)

        // get sidebar
        const side = document.querySelector('.side')

       // pass through each item and where to append
        addProjects(content, thisProject.checkOutstanding(), project.id)

        // reload sidebar incase name was changed
        loadSidebar(side, manager.checkOutstanding(), content)
    })
    content.append(form)
}