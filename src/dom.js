import { createEle, loop, clear } from "./createElements"
import { inDiary } from "./diary"
import { manager } from './index'
import { addProjectForm, addTaskForm, editProjectForm, editTaskForm, completeTask, completeProject } from "./forms"
import check from './check.svg'
import pen from './pen.svg'
import plus from './plus.svg'
import listSVG from './list.svg'

// add projects to content section, list of objects and parent id
export function addProjects(projectId){
    // get tasks for project
    const objs = getTasks(projectId)

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
        ['p', 'projectDueDate', `Due: ${tasks.dueDate}`],
        ['p', 'projectDescription', ` ${tasks.description}`],
    ]
    // div to hold project buttons
    const projDetailsButtonsHolder = createEle('div', 'projDetailsButtonsHolder', '')
    // buttons
    const projDetailsButtons = [
        ['button', 'editButton editProject', ''],
        ['button', 'completeProject', ''],
    ]

    loop(projDetailsButtons, projDetailsButtonsHolder)

    // add details to div add div to content
    loop(projectDetails, projectDetailsDiv)
    projectDetailsDiv.append(projDetailsButtonsHolder)
    content.append(projectDetailsDiv)

    // button to edit this projects details
    const compProject = document.querySelector('.completeProject')
    const editProject = document.querySelector('.editProject')

    // edit project details
    editProject.addEventListener('click', () => {
        editProjectForm(manager.list[projectId])
        editProject.style.display = 'none'
        compProject.style.display = 'none'
    })

    // button to edit this projects details
    compProject.addEventListener('click', () => {
        completeProject(projectId)
    })
    // add SVG
    const checkSVG = createEle('img', 'checkSVG', '')
    checkSVG.src = check
    compProject.append(checkSVG)

    // add SVG
    const tickSVG = createEle('img', 'checkSVG', '')
    tickSVG.src = pen
    editProject.append(tickSVG)

    // loop through list of tasks
    if (objs.checkOutstanding().length == 0){
        // create a "box" for each task
        let box = createEle("div", "empty", "", )
        content.append(box)

    }
    // loop through outstanding tasks
    objs.checkOutstanding().forEach( (obj) => {

        // create a "box" for each task
        let box = createEle("div", "box", "", obj.id)
        let list = createEle("ul", `task-list`,'')
        let listitems = [
            ['li', `list-item`, `${obj.title}`],
            ['li', 'list-item desc', obj.description == "" ? '' : `${obj.description}`,''],
            ['li', 'list-item', `Due: ${obj.dueDate}`,''],
        ]

        // buttons
        let edit = createEle('button', 'editButton editTaskButton', '', obj.id)
        let complete = createEle('button', 'editCompleteButton', '', obj.id)
        
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

        const checkSVG = createEle('img', 'checkSVG', '')
        checkSVG.src = check
        complete.append(checkSVG)

        const tickSVG = createEle('img', 'checkSVG', '')
        tickSVG.src = pen
        edit.append(tickSVG)
       
        // add divs to ".content"
        content.append(box)
        
    })

    const addTaskDiv = createEle('div', 'addTaskDiv', '')
    // add task button
    let addTask = createEle('button', 'addTask', '')
    const addListSVG = createEle('img', 'checkSVG', '')
    addListSVG.src = listSVG
    addTask.append(addListSVG)

    addTask.addEventListener('click', () => {
        if(!(document.querySelector('.addTaskForm'))){
            addTaskForm(projectId)
            addTask.style.display = 'none'
        }
    })
    // add button to page
    addTaskDiv.append(addTask)
    content.append(addTaskDiv)

    if(objs.checkComplete().length > 0){
        content.append(createEle('div','completeTitleDiv', ''))
        document.querySelector('.completeTitleDiv').append(createEle('h3', 'completeTitle','Completed tasks'))
    }
   
    // loop through list of tasks
    objs.checkComplete().forEach( (obj) => {

        // create a "box" for each task
        let box = createEle("div", "complete-box", "", '')
        let list = createEle("ul", `complete-list`,'')

        let listitems = [
            ['li', `list-item`, `${obj.title}`],
            ['li', 'list-item desc ', obj.description == "" ? '' : `${obj.description}`,''],
            ['li', 'list-item', `Due: ${obj.dueDate}`,''],
        ]

        // add ul to box element
        box.append(list)

        // add to body and box div
        loop(listitems, list)
        
        // add divs to ".content"
        content.append(box)
    })
}

export function loadSidebar(){

    // get update list of projects
    const objs = manager.checkOutstanding()

    // get content and side
    const side = document.querySelector('.side')

    // remove each child to avoid duplication from content box
    clear(side)

    // create a Node list
    let times = createEle("ul", "list", "")
    
    const timesItems = [
        ['li', 'list-title','Diary'],
        ['li', 'side-list-item today',''],
        ['li', 'side-list-item week',''],
    ]

    loop(timesItems, times)

    // create a Node list
    let list = createEle("ul", "list", "")
    list.append(createEle('li', 'list-title', "Projects"))
    // pass over each item and add its title to the sidebar list
    objs.forEach( (project) => {
        list.append(createEle('li', 'side-list-item project-item', `${project.title}`, `${project.id}`))
    })

    // append to list
    side.append(times)
    side.append(list)

    const today = document.querySelector('.today')
    today.append(createEle('div', 'todaySVG', ''))
    today.append(createEle('p', 'side-list-item', 'Today'))

    document.querySelector('.todaySVG').outerHTML = '<svg class="todaySVG" style="width:24px;height:24px;justify-self:center;align-self:center;" viewBox="0 0 24 24"><path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>'

    const week = document.querySelector('.week')
    week.append(createEle('div', 'weekSVG', ''))
    week.append(createEle('p', 'side-list-item', 'This week'))

    document.querySelector('.weekSVG').outerHTML = '<svg class="todaySVG" style="width:24px;height:24px;justify-self:center;align-self:center;" viewBox="0 0 24 24"><path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>'

    // add event listeners to diary items
    today.addEventListener('click', () => {
        inDiary(0)
    })

    week.addEventListener('click', () => {
        inDiary(8)
    })

    // button for sidebar, add event listener and add to page
    let addProjectButton = createEle('button', 'addProject', '')
    const plusSVG = createEle('img', 'checkSVG', '')
    plusSVG.src = plus
    addProjectButton.append(plusSVG)

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
            addProjects(item.getAttribute("id"))
        })
    })
}

// find the correct project
export function getTasks(id){
    return manager.list[id]
}