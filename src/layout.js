import { createEle, loop, createFormEle, loopForm} from "./createElements"
import { manager } from "./index"
import { loadSidebar } from "./dom"

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
    
    // add title to page
    nav.append(createEle('h1', 'title', 'Project manager inc.'))

    // load sidebar pass all available objects
    loadSidebar(manager.checkOutstanding())
}
