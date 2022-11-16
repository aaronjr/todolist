import { createEle, loop } from "./createElements"
import { manager } from "./index"
import { addProjects, loadSidebar, loadContent } from "./dom"

const body = document.querySelector('body')

const mainStructure = [
    ['nav','nav',''],
    ['div','side',''],
    ['div','content',''],
]

export function layout(){
    loop(mainStructure, body)

    // get back these items
    const nav = document.querySelector('.nav')
    const side = document.querySelector('.side')
    const content = document.querySelector('.content')

    // add header to page
    nav.append(createEle('h1', 'title', 'To do list'))

    // load sidebar pass all available objects
    loadSidebar(side, manager.checkOutstanding())

    // get back items and add event listeners
    const projectTitles = document.querySelectorAll('.project-item')
    projectTitles.forEach( (item) => {
        item.addEventListener('click', ()=>{
            loadContent(content, item.getAttribute("id"))
        })
    })
}
