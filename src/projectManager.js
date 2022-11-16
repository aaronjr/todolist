export class Manager {

    // create empty list for projects
    list = []

    // Add project to list
    add(project){
        // set id of project bassed on how many projects exist
        project.id = this.list.length
        this.list.push(project)
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