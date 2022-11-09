'use strict'

export {addProject, projectArray}

const addProject = document.getElementById('addProject');
const projectEntries = document.getElementById('projectEntries');
const projectTitle = document.getElementById('projectTitle');
const projectModal = document.getElementById('projectModal')
const closeProjectModal = document.getElementById('closeProjectModal')
const taskProject = document.getElementById('taskProject')
const projectError = document.getElementById('projectError')
const interfaceHeader = document.getElementById('interfaceHeader')
const taskEntries = document.getElementById('taskEntries')

let projectArray = []
let projectOptions = ["Inbox"]

class Project {

    constructor() {
        this.title = projectTitle.value
        this.storedTasks = []
    }

    storeProject() {
        projectArray.push(this)
        console.log(projectArray)
    }

    displayTasks() {

        projectEntries.childNodes.forEach(node => {
            if (node.nodeName == 'DIV') {

                projectArray.forEach(project => {
                    if (project.title == node.childNodes[1].textContent) {
                       
                        project.storedTasks.forEach(task => {
                            
                            let taskDiv = document.createElement('div')
                            taskDiv.classList.add('task-entry')
                            taskEntries.appendChild(taskDiv)

                            let entryTitle = document.createElement('div')
                                entryTitle.classList.add('entry-title')
                                taskDiv.appendChild(entryTitle)

                                let checkBox = document.createElement('input')
                                    checkBox.type = 'checkbox'
                                
                                let titleText = document.createElement('h6')
                                    titleText.textContent = task.title

                                entryTitle.appendChild(checkBox)
                                entryTitle.appendChild(titleText)

                            let entryDate = document.createElement('h6')
                                entryDate.textContent = task.dueDate
                                taskDiv.appendChild(entryDate)
                            
                            let entryButtons = document.createElement('div')
                                entryButtons.classList.add('entry-buttons')
                                taskDiv.appendChild(entryButtons)

                                let newEntryButton = document.createElement('i')
                                    newEntryButton.setAttribute('class','fa-solid fa-pen-to-square')

                                let deleteEntryButton = document.createElement('i')
                                    deleteEntryButton.setAttribute('class', 'fa-solid fa-xmark')

                            entryButtons.appendChild(newEntryButton)
                            entryButtons.appendChild(deleteEntryButton)
                        })  
                    }
                })
            }
        })
    }   
            

    createProjectBtn() {

        let projectDiv = document.createElement('div')
        projectEntries.appendChild(projectDiv)

            let projectIcon = document.createElement('i')
            projectIcon.setAttribute('class', 'fa-solid fa-list-ul')

            let projectButton = document.createElement('button')
            projectButton.onclick = e => {
                this.loadProject(e)
                this.displayTasks(e)
            }
            projectButton.textContent = this.title

            let projectDelete = document.createElement('i')
            projectDelete.setAttribute('class', 'fa-regular fa-trash-can fa-lg project-delete')
            projectDelete.onclick = e => {
                this.deleteOption(e);
                e.target.parentNode.remove()
            }

            projectDiv.appendChild(projectIcon)
            projectDiv.appendChild(projectButton)
            projectDiv.appendChild(projectDelete)
    }
    
    addOption() {

        let newOption = document.createElement('option')
        newOption.value = this.title
        newOption.textContent = this.title
        taskProject.appendChild(newOption)
        // projectOptions.push(this.title)
    }

    deleteOption() {

            taskProject.childNodes.forEach(node => {
                if (node.nodeType == 1) {
                    if(node.value == this.title) {
                        taskProject.removeChild(node)
                        this.deleteProject()
                    }
                }
            })
        }

    deleteProject() {

        let result = projectArray.filter(project => project.title !== this.title)
        projectArray = result 
    }

    loadProject() {
        interfaceHeader.textContent = this.title

        // Deletes nodes, but not current interface tasks
        taskEntries.childNodes.forEach(node => {
            taskEntries.removeChild(node)
        })
        console.log(taskEntries.childNodes)

        // Load new tasks
    }

    showError() {
        projectError.style.visibility = 'hidden'
    }

    projectError() {

        let projectSubmit = false

        if (this.title == '') {
            projectError.textContent = '"Project Name" field is required'
            projectError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else {
            projectSubmit = true
        }

        if (projectSubmit) {
            this.storeProject()
            this.createProjectBtn()
            this.addOption()
            this.resetValue()
            projectModal.close()
        }
    }

    resetValue() {
        projectTitle.value = ''
    }
    
}


    
addProject.addEventListener('click', function() {
    projectModal.showModal()
    projectModal.style.animation = 'fade-in 0.5s forwards';
})

closeProjectModal.addEventListener('click', function() {
    projectModal.close()
})

submitProject.addEventListener('click', function(e) {
    e.preventDefault()
    let project = new Project
    project.projectError()
})
