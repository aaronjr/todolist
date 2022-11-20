import { createEle, loopForm, clear } from "./createElements"
import { loadSidebar, addProjects, getTasks } from "./dom"
import { manager } from "./index"
import { Project } from './project'
import { Task } from "./task"

export function addProjectForm(side){
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
        let description = ""
        let dueDate = ""
        const project = new Project(projectName, description, dueDate)
        manager.add(project)
        loadSidebar()
        addProjects(manager.list.length - 1)
    })
    
    // add to correct location
    side.append(form)
    document.querySelector('.addProjectDetails').placeholder = "Project title"
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
        let description = ""
        let dueDate = ""
        const task = new Task(taskName, description, dueDate)

        // Get this project and add task to it
        const thisProject = getTasks(projectId)
        thisProject.add(task)

        // pass through object
        addProjects(projectId)
    })
    
    // add to correct location
    content.append(form)
    document.querySelector('.addTaskDetails').placeholder = "Task title"
}

// takes in project object
export function editProjectForm (project) {

    // create a form
    const form = createEle('form', 'editProjectForm', '')

    // (tag,  name, className = "", inner = "", value = "" , forlabel = "", id="")

    // list of needed items
    const formElements = [
        // label and input for name
        ['label', '', '', 'Title', '', 'ProjectName', ''],
        ['input', 'ProjectName', 'editTaskDetails','', `${project.title}`, '', 'ProjectName'],
        // label and input for description
        ['label', '', '', 'Description', '', 'ProjectDescription', ''],
        ['input', 'ProjectDescription', 'editProjectDetails','', `${project.description}`, '', 'ProjectDescription'],
        // label and input for date
        ['label', '', '', 'Due', '', 'ProjectDue', ''],
        ['input', 'ProjectDue', 'editProjectDue','', `${project.dueDate}`, '', 'ProjectDue'],
        // button
        ['button', '', 'editProjectButton','Confirm changes'],
    ]

    loopForm(formElements, form)

    let projectDetailsDiv = document.querySelector('.projectDetailsDiv')

    form.addEventListener('submit', (e) => {
        // prevent submit
        e.preventDefault()

        // get details from form
        let newTitle = form.ProjectName.value
        let newDes = form.ProjectDescription.value
        let newDate = form.ProjectDue.value

        // get correct project
        const thisProject = getTasks(project.id)

        // update details
        thisProject.edit('title', newTitle)
        thisProject.edit('description', newDes)
        thisProject.edit('dueDate', newDate)

       // pass through each item and where to append
        addProjects(project.id)

        // reload sidebar incase name was changed
        loadSidebar()
    })
    projectDetailsDiv.append(form)
}

// takes in the div the form should append to and the project and task id
export function editTaskForm (thisDiv, project, id) {

    // create a form
    const form = createEle('form', 'editTaskForm', '')

    // get correct project
    const thisProject = getTasks(project)
    const thisTask = thisProject.list[id]

    // list of needed items
    const formElements = [
        // label and input for name
        ['label', '', '', 'Title:', '', 'TaskName', ''],
        ['input', 'TaskName', 'addTaskDetails','', `${thisTask.title}`, '', 'TaskName'],
        // label and input for description
        ['label', '', '', 'Description:', '', 'TaskDescription', ''],
        ['input', 'TaskDescription', 'addTaskDetails','', `${thisTask.description}`, '', 'TaskDescription'],
        // label and input for date
        ['label', '', '', 'Due:', '', 'TaskDue', ''],
        ['input', 'TaskDue', 'addTaskDue','', `${thisTask.dueDate}`, '', 'TaskDue'],
        // button
        ['button', '', 'addTaskButton','Confirm changes'],
    ]
    // add elements to form
    loopForm(formElements, form)

    form.addEventListener('submit', (e) => {
        // prevent submit
        e.preventDefault()

        // get details from form
        let newTitle = form.TaskName.value
        let newDes = form.TaskDescription.value
        let newDate = form.TaskDue.value

        // update details
        thisTask.edit('title', newTitle)
        thisTask.edit('description', newDes)
        thisTask.edit('dueDate', newDate)

       // add tasks to page
        addProjects(project)

        // reload sidebar incase name was changed
        loadSidebar()
    })

    // add to correct box
    thisDiv.append(form)
}

// takes in project id and task id - not as an object but a string
export function completeTask (project, id) {

    // get correct project
    const thisProject = getTasks(project)
    const thisTask = thisProject.list[id]

    // update task to complete
    thisTask.edit('outstanding', false)

    if(thisProject.checkOutstanding().length == 0){
        manager.list[project].edit('outstanding', false)

        const content = document.querySelector('.content')
        clear(content)
        console.log("here")
        loadSidebar()
        if(manager.list >= 0){
            addProjects(0)
        }
    }
    else{
        // reload content
        addProjects(project)
    }
}
