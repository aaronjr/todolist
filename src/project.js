import { Manager } from "./projectManager"

export class Project extends Manager{
    // set up class
    constructor(title, description, dueDate, outstanding = true ){

        super()
        // set own details as Manager does not
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.outstanding = outstanding
        this.id
    }

    edit (where, edit) {
        // change any details except id
        where === "id" ? this.id = this.id : this[where] = edit
    }
}