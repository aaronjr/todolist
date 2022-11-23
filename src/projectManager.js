
export class Manager {

    // create empty list for projects or tasks
    list = []

    // Add project/tasks to list
    add(project){
        // set id of project bassed on how many projects exist
        project.id = this.list.length
        this.list.push(project)
    }

     // Create list of outstanding tasks
     checkOutstanding(){
        let outstand = this.list.filter( (item) => item.outstanding == true).sort(function(a, b){
            return a.dueDate.localeCompare(b.dueDate);
        })

        return outstand
    }

    // Create list of completed tasks
    checkComplete(){
        let completed = this.list.filter( (item) => item.outstanding == false)
        return completed
    }

}