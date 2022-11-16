// create element with html tag, class and textContents
export function createEle(tag, className = "", text = ""){
    let element = document.createElement(tag)
    element.className = className
    element.textContent = text
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