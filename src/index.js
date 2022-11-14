import {printTouch} from "./touch.js"
import './styles.css';



class Project {
    constructor(title, desciption, dueDate){
        this.title = title
        this.desciption = desciption
        this.dueDate = dueDate
    }
    details(){
        console.log(`${this.title} is due ${this.dueDate}`)
    }
}

const FFProject = {
    project(title, desciption, dueDate){
        
    }
}



let proj = new Project("shop", "carry out early morning", "tomorrow")

proj.details()

proj.title = "mow"

console.log(proj)