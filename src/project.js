export class Project {
    // set up class
    constructor(title, desciption, dueDate){
        this.title = title
        this.desciption = desciption
        this.dueDate = dueDate
        this.outstanding = true
        this.id
    }

    // empty list of tasks
    list = []
    
    // Add to task list
    add(task){
        // set id of task bassed on this projects length of list
        task.id = this.list.length
        this.list.push(task)
    }

    // Create list of outstanding tasks
    oustanding(){
        let outstand = this.list.map( (item) => {
            item.outstanding == true
            return item
        })
        return outstand
    }

    // Create list of completed tasks
    complete(){
        let completed = this.list.map( (item) => {
            item.outstanding == false
            return item
        })
        return completed
    }
}