import { manager } from "."
import { createEle, loop} from "./createElements"
import { addProjects, loadSidebar } from "./dom"

const body = document.querySelector('body')

const mainStructure = [
    ['nav','nav',''],
    ['div','side',''],
    ['div','content',''],
]

export function layout(){
    // loop through list and add to body
    loop(mainStructure, body)
    
    // sidebar, add another class
    document.querySelector(".side").classList += " showSide";
    // add title to page
    document.querySelector('.nav').append(createEle('h1', 'title', 'Project manager'))

    // hamburge menu
    document.querySelector('.nav').append(createEle('div', 'menu', ''))
    const menu = document.querySelector('.menu')
    let show = false
    menu.addEventListener('click', () => {
        show = show == false ? true : false;
        console.log(show);

        show == true
          ? (document.querySelector(".side").style.display = "block")
          : (document.querySelector(".side").style.display = "none");
        
    })

    // load sidebar pass all available objects
    if(manager.checkOutstanding().length > 0){
        addProjects(manager.checkOutstanding()[0].id)
    }
    
    loadSidebar()
}
