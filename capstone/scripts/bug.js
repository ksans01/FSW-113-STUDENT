// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number

let reportedBy = document.getElementById('reportedBy')
let system = document.getElementById('system')
let subSystem = document.getElementById('subSystem')
let bugDesc = document.getElementById('bugDesc')


class Bug {
    constructor(...data) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.all = data
        this.reportedBy = data[0]
        this.system = data[1]
        this.subSystem = data[2]
        this.bugDesc = data[3]
        this.isResolved = false
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let container = document.querySelector('#listWrapper')
        let bugBox = document.createElement('div')
        bugBox.style.background = "gray"
        let randomID = Math.floor(Math.random()*1000)
        bugBox.setAttribute('id', randomID)

        let nameDiv = document.createElement('h3')
        nameDiv.textContent = `Name: ${this.reportedBy}`

        let systemDiv = document.createElement('h4')
        systemDiv.textContent = `System: ${this.system} | Subsystem: ${this.subSystem}`

        let descriptionDiv = document.createElement('h5')
        descriptionDiv.textContent = `Descrition: ${this.bugDesc}`

        let deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener('click', () => this.deleteBug(randomID))

        let resolveButton = document.createElement('button')
        resolveButton.textContent = 'Resolve'
        resolveButton.addEventListener('click', () => this.resolveBug(randomID))

        bugBox.appendChild(nameDiv)
        bugBox.appendChild(systemDiv)
        bugBox.appendChild(descriptionDiv)
        bugBox.appendChild(deleteButton)
        bugBox.appendChild(resolveButton)
        container.appendChild(bugBox)

    }

    deleteBug(randomID) {
        let bugBox = document.getElementById(randomID)
        bugBox.remove()
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug(randomID) {
        let bugBox = document.getElementById(randomID)
        this.isResolved =! this.isResolved
        if(this.isResolved === true){
            bugBox.style.background = "green"
        }else {
            bugBox.style.background = "red"
        }

        // Create code that changes the appropriate bug report to a darker color
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let reportedByValue = reportedBy.value
    let systemValue = system.value
    let subSystemValue = subSystem.value
    let bugDescValue = bugDesc.value

    let bug = new Bug(
        
        reportedByValue,
        systemValue,
        subSystemValue,
        bugDescValue
    )
    bug.addBug()
    console.log(bug)
}

let button = document.getElementById('submitBtn').addEventListener('click', reportBug)
