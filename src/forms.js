import { createEle, loopForm } from "./createElements"
import { loadSidebar } from "./dom"
import { manager } from "./index"
import { Project } from './project'


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