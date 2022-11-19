export class Task {
    // create class items
    constructor(title, description, dueDate){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.outstanding = true
        this.id = ""
    }

    edit (where, edit) {
        // change any details except id
        where === "id" ? this.id = this.id : this[where] = edit
    }
}