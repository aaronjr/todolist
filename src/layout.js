import { createEle, loop } from "./createElements"

const body = document.querySelector('body')

const mainStructure = [
    ['nav','nav',''],
    ['div','side',''],
    ['div','content',''],
]

export function layout(){
    loop(mainStructure, body)
    
    const nav = document.querySelector('.nav')
    const side = document.querySelector('.side')
    const content = document.querySelector('.content')

    nav.append(createEle('h1', 'title', 'To do list'))
}