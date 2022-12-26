'use strict'

import { isToday, isThisWeek, format, parseISO} from "date-fns";
import { Task } from "./addTask";

export {Project, addProject, inboxButton, todayButton, weekButton, projectArray, allTasks, storeAllProjects, storeAllTasks, fetchAllTasks, fetchProjects};

const addProject = document.getElementById('addProject');
const projectEntries = document.getElementById('projectEntries');
const projectTitle = document.getElementById('projectTitle');
const projectModal = document.getElementById('projectModal');
const editModal = document.getElementById('editModal');
const updateButton = document.getElementById('updateButton');
const closeProjectModal = document.getElementById('closeProjectModal');
const closeEditModal = document.getElementById('closeEditModal');
const editTitle = document.getElementById('editTitle');
const editPriority = document.getElementById('editPriority');
const editDueDate = document.getElementById('editDueDate');
const taskProject = document.getElementById('taskProject');
const projectError = document.getElementById('projectError');
const editError = document.getElementById('editError');
const interfaceHeader = document.getElementById('interfaceHeader');
const taskEntries = document.getElementById('taskEntries');
const inboxButton = document.getElementById('inboxButton');
const todayButton = document.getElementById('todayButton');
const weekButton = document.getElementById('weekButton');

let projectArray = []
let allTasks = []

let targetTask = ''

class Project {

    constructor() {
        this.title = projectTitle.value
        this.storedTasks = []
    }

    storeProject() {
        projectArray.push(this);
        storeAllProjects();
    }

    displayTasks() {

        projectArray.forEach(project => {
 
            if (project.title == this.title) {
                
                project.storedTasks.forEach(task => {

                    let taskDiv = document.createElement('div');
                    taskDiv.classList.add('task-entry');
                    taskDiv.style.backgroundImage = this.checkPriority(task);
                    taskEntries.appendChild(taskDiv);

                    let entryButtons = document.createElement('div');
                        entryButtons.classList.add('entry-buttons');
                        taskDiv.appendChild(entryButtons);


                        let editButton = document.createElement('i');
                            editButton.setAttribute('class','fa-solid fa-pen-to-square');
                            editButton.onclick = (e) => {
                                targetTask = e.target.parentNode.parentNode.children[1].textContent;
                                this.editTask();
                            }

                        let deleteEntryButton = document.createElement('i');
                            deleteEntryButton.setAttribute('class', 'fa-solid fa-xmark task-delete');
                            deleteEntryButton.onclick = e => {
                                let target = e.target.parentNode.parentNode.children[1].textContent;
                                e.target.parentNode.parentNode.remove();
                                this.deleteStoredTask(target);
                                this.deleteGlobalTask(target);
                            }

                        entryButtons.appendChild(editButton);
                        entryButtons.appendChild(deleteEntryButton);

                    let titleText = document.createElement('h6');
                    titleText.classList.add('title-styling');
                    titleText.textContent = task.title;
                    taskDiv.appendChild(titleText);
                    
                    let entryDate = document.createElement('h6');
                    entryDate.classList.add('task-date');
                    entryDate.textContent = `Due: ${task.formattedDate}`;
                    taskDiv.appendChild(entryDate);
                    
                    let taskBottom = document.createElement('div');
                    taskBottom.classList.add('task-bottom');
                    taskDiv.appendChild(taskBottom);
                    
                            let entryPriority = document.createElement('h6');
                            entryPriority.classList.add('task-priority');
                            entryPriority.textContent = `Priority: ${task.priority}`;
                            taskBottom.appendChild(entryPriority);
                })  
            }
        })
    }   
            
    createProjectBtn() {

        let projectDiv = document.createElement('div');
        projectEntries.appendChild(projectDiv);

            let projectIcon = document.createElement('i');
            projectIcon.setAttribute('class', 'fa-solid fa-list-ul');

            let projectButton = document.createElement('button');
            projectButton.onclick = () => {
                this.loadProject();
            } 
            projectButton.textContent = this.title;

            let projectDelete = document.createElement('i');
            projectDelete.setAttribute('class', 'fa-regular fa-trash-can fa-lg project-delete');
            projectDelete.onclick = e => {
                this.deleteOption(e);
                this.deleteProject();
                e.target.parentNode.remove();
            }

            projectDiv.appendChild(projectIcon);
            projectDiv.appendChild(projectButton);
            projectDiv.appendChild(projectDelete);
    }

    checkPriority(task) {
        
        if (task.priority == 'Low') {
            return 'linear-gradient(white, lightgreen)';
        }

        else if (task.priority == 'Medium') {
            return 'linear-gradient(white, yellow)';
        }

        else {
            return 'linear-gradient(white, crimson)';
        }
    }
    
    editTask() {
        editModal.showModal();
        editModal.style.animation = 'fade-in 0.5s forwards';
        updateButton.onclick = e => {
            e.preventDefault();
            this.updateTask();
        }
    }

    updateTask() {
        this.storedTasks.forEach(task => {
            if(task.title == targetTask) {

                if (editTitle.value == '' || editTitle.value == null) {
                    task.title = task.title;
                } else {
                    task.title = editTitle.value;
                }

                if (editPriority.value == '' || editPriority.value == null) {
                        task.priority = task.priority;
                    } else {
                        task.priority = editPriority.value;
                    }

                if (editDueDate.value == '' || editDueDate.value == null) {
                        task.dueDate = task.dueDate;
                        task.formattedDate = format(parseISO(task.dueDate), 'iiii, PPP');
                    } else {
                        task.dueDate = editDueDate.value;
                        task.formattedDate = format(parseISO(editDueDate.value), 'iiii, PPP');
                    }
                
                storeAllProjects();
                storeAllTasks()
                this.loadProject();
                editModal.close();
                targetTask = '';
            } 
        })   
    }
    
    addOption() {
        let newOption = document.createElement('option');
        newOption.value = this.title;
        newOption.textContent = this.title;
        taskProject.appendChild(newOption);
    }

    deleteOption() {
        taskProject.childNodes.forEach(node => {
            if (node.nodeType == 1) {
                
                if(node.value == this.title) {
                    taskProject.removeChild(node);
                    this.deleteProject();
                }
            }
        })
    }

    deleteStoredTask(target) {
        let result = this.storedTasks.filter(task => task.title !== target);
        this.storedTasks = result;
        storeAllTasks();
    }

    deleteGlobalTask(target) {
        let result = allTasks.filter(task => task.title !== target);
        allTasks = result;
        storeAllTasks();
    }

    deleteProject() {
        let result = projectArray.filter(project => project.title !== this.title);
        projectArray = result;
        storeAllProjects();
    }

    loadProject() {
        interfaceHeader.textContent = this.title;

        while (taskEntries.firstChild) {
            taskEntries.firstChild.remove();
        }

        this.displayTasks();
    }

    loadToday() {
        projectArray[1].storedTasks = [];
       
        allTasks.forEach(task => {
            let date = parseISO(task.dueDate);
            if (isToday(date)) {
                projectArray[1].storedTasks.push(task);
            }
        })

        projectArray[1].loadProject();
    }

    loadThisWeek() {

        projectArray[2].storedTasks = [];
       
        allTasks.forEach(task => {
            let date = parseISO(task.dueDate);
            if (isThisWeek(date)) {
                projectArray[2].storedTasks.push(task);
            }
        })

        projectArray[2].loadProject();
    }

    showProjectError() {
        projectError.style.visibility = 'hidden';
    }

    showEditError() {
        editError.style.visibility = 'hidden';
    }

    projectError() {

        let projectSubmit = false;
        let isDuplicate = false;
        
        projectArray.forEach(project => {
            if (project.title == this.title) {
                isDuplicate = true;
                projectError.textContent = "Cannot use name of existing project";
                projectError.style.visibility = 'visible';
                setTimeout(() => {
                    this.showProjectError()
                }, 5000)}
        })

        if (this.title == '' || this.title == null) {
            projectError.textContent = '"Project Name" field is required';
            projectError.style.visibility = 'visible';
            setTimeout(() => {
                this.showProjectError()
            }, 5000);
        }

        else if (this.title !== '' && isDuplicate == false) {
            projectSubmit = true;
        }
     
        if (projectSubmit) {
            this.storeProject();
            this.createProjectBtn();
            this.addOption();
            this.resetValue();
            projectModal.close();
            storeAllProjects();
        }
    }

    resetValue() {
        projectTitle.value = '';
    } 
}

// EVENT LISTENERS

inboxButton.addEventListener('click', function() {
    projectArray[0].loadProject();
})

todayButton.addEventListener('click', function() {
    projectArray[1].loadToday();
})

weekButton.addEventListener('click', function() {
    projectArray[2].loadThisWeek();
})
    
addProject.addEventListener('click', function() {
    projectModal.showModal();
    projectModal.style.animation = 'fade-in 0.5s forwards';
})

closeProjectModal.addEventListener('click', function() {
    projectModal.close();
})

closeEditModal.addEventListener('click', function(e) {
    e.preventDefault();
    targetTask = '';
    editModal.close();
})

submitProject.addEventListener('click', function(e) {
    e.preventDefault();
    let project = new Project;
    project.projectError();
})


// STORAGE FUNCTIONS

function storeAllProjects() {
    window.localStorage.setItem('projectArray', JSON.stringify(projectArray));
}

function storeAllTasks() {
    window.localStorage.setItem('allTasks', JSON.stringify(allTasks));
}

function fetchProjects() {
    let getProjectArray = window.localStorage.getItem('projectArray');
    let newProjectArray = [];

    projectArray = JSON.parse(getProjectArray);
    
    projectArray.forEach(project => {
        project = Object.assign(new Project, project);
        newProjectArray.push(project);
        projectArray = newProjectArray;
    })
}

function fetchAllTasks() {
    let getAllTasks = window.localStorage.getItem('allTasks');
    let newTaskArray = [];

    allTasks = JSON.parse(getAllTasks);

    allTasks.forEach(task => {
        task = Object.assign(new Task, task);
        newTaskArray.push(task);
        allTasks = newTaskArray;
    })
}