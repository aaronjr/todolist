// create element with html tag, class and textContents
export function createEle(tag, className = "", text = "", id = null){
    let element = document.createElement(tag)
    element.className = className
    element.textContent = text
    // set id if a value is present
    if(!( id == null )){
        element.setAttribute("id", id)
    }
    return element
}

// create function to pass in array and where to append
export function loop(array, where){
    for(let counter in array){
        where.append(
            createEle(
                array[counter][0],
                array[counter][1],
                array[counter][2]))
    }
}

// create element with html tag, class and textContents
export function createFormEle(tag,  name, className = "", inner = "", value = "" , forlabel = "", id=""){
    let element = document.createElement(tag)
    element.name = name
    element.className = className
    element.textContent = inner
    element.value = value
    element.id = id
    if(tag == 'label'){
        element.for = forlabel
    }

    return element
}

// create function to pass in array and where to append
export function loopForm(array, where){
    for(let counter in array){
        where.append(
            createFormEle(
                array[counter][0],
                array[counter][1],
                array[counter][2],
                array[counter][3],
                array[counter][4],
                array[counter][5],
                array[counter][6]
                ))
    }
}