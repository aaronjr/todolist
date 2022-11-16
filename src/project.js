import { Manager } from "./projectManager"

export class Project extends Manager{
    // set up class
    constructor(title, desciption, dueDate){

        super()
        // set own details as Manager does not
        this.title = title
        this.desciption = desciption
        this.dueDate = dueDate
        this.outstanding = true
        this.id
    }
}