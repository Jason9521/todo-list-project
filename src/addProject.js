'use strict'

import { Button } from "bootstrap";
import { Task } from "./addTask"
export {addProject, projectArray}

const addProject = document.getElementById('addProject');
const projectEntries = document.getElementById('projectEntries');
const projectTitle = document.getElementById('projectTitle');
const projectModal = document.getElementById('projectModal')
const closeProjectModal = document.getElementById('closeProjectModal')
const taskProject = document.getElementById('taskProject')

let projectArray = []

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
                        console.log(project.storedTasks)
                        let taskDiv = document.createElement('div')
                        taskDiv.classList.add('task-entry')
                        taskEntries.appendChild(taskDiv)

                        let entryTitle = document.createElement('div')
                            entryTitle.classList.add('entry-title')
                            taskDiv.appendChild(entryTitle)

                            let checkBox = document.createElement('input')
                                checkBox.type = 'checkbox'
                            
                            let titleText = document.createElement('h6')
                                titleText.textContent = project.storedTasks[0].title

                            entryTitle.appendChild(checkBox)
                            entryTitle.appendChild(titleText)

                        let entryDate = document.createElement('h6')
                            entryDate.textContent = project.storedTasks[0].dueDate
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
                this.displayTasks(e)
            }
            projectButton.textContent = this.title

            let projectDelete = document.createElement('i')
            projectDelete.setAttribute('class', 'fa-regular fa-trash-can fa-lg project-delete')
            projectDelete.setAttribute('id', 'projectDelete')
            projectDelete.setAttribute('onclick', 'parentNode.remove()')
            
            projectDiv.appendChild(projectIcon)
            projectDiv.appendChild(projectButton)
            projectDiv.appendChild(projectDelete)
    }
    
    
            
    

    addOption() {
        let newOption = document.createElement('option')
        newOption.value = this.title
        newOption.textContent = this.title
        taskProject.appendChild(newOption)
    }

    // deleteOption() {
    //     })

 
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
    project.storeProject()
    project.createProjectBtn()
    project.addOption()
    // project.deleteOption()

    // Show data for clicked project button
    
        
   
    

    projectTitle.value = ''

    projectModal.close()
})
