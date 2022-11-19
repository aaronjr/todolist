import { createEle, loop} from "./createElements"
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
    
    // add title to page
    document.querySelector('.nav').append(createEle('h1', 'title', 'Project manager inc.'))

    // load sidebar pass all available objects
    loadSidebar()
}
