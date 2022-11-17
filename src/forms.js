import { createEle, loopForm } from "./createElements"

export function addProjectForm(where){
    const form = createEle('form', 'addProjectForm', '')

    // list of needed items
    const formElements = [
        ['input', 'projectName', 'addProjectName',''],
        ['button', '', 'addButton','Add project'],
    ]

    // add items to form
    loopForm(formElements, form)

    // stop form submitting
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
    })

    // add to correct location
    where.append(form)
}