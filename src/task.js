export class Task {
    // create class items
    constructor(title, desciption, dueDate){
        this.title = title
        this.desciption = desciption
        this.dueDate = dueDate
        this.outstanding = true
        this.id = ""
    }

    edit(where, edit){
        // change any details except id
        where === "id" ? this.id = this.id : this[where] = edit
    }
}