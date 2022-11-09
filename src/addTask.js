'use strict'

import { projectArray } from "./addProject"
export { Task ,addTask, closeModal, submitTask}

const addTask = document.getElementById('addTask');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const submitTask = document.getElementById('submitTask');
const taskTitle = document.getElementById('taskTitle')
const taskDescription = document.getElementById('taskDescription')
const taskProject = document.getElementById('taskProject')
const taskPriority = document.getElementById('taskPriority')
const dueDate = document.getElementById('dueDate')
const taskError = document.getElementById('taskError')

class Task {

    constructor() {
        
        this.title = taskTitle.value;
        this.description = taskDescription.value;
        this.project = taskProject.value;
        this.priority = taskPriority.value;
        this.dueDate = dueDate.value;
    }

    storeData() {

        projectArray.forEach(project => {
            if (project.title == this.project) {
                project.storedTasks.push(this)
            }
        })
    }

    loadData() {
        // Compile data into an array and display tasks according to stored data
    }

    showError() {
        taskError.style.visibility = 'hidden'
    }

    taskError() {

        let taskSubmit = false

        if (this.title == '' || this.title == null) {
            taskError.textContent = '"Title" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.project == '') {
            taskError.textContent = '"Project" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.priority == '') {
            taskError.textContent = '"Priority" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.dueDate == '') {
            taskError.textContent = '"Due Date" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else {
            taskSubmit = true
        }

        if (taskSubmit) {
            this.storeData()
            this.resetValues()
            modal.close()
        }
    }

    resetValues() {
        taskTitle.value = ''
        taskDescription.value = ''
        taskProject.value = ''
        taskPriority.value = ''
        dueDate.value = ''
    }
}

addTask.addEventListener('click', function() {
    modal.showModal()
    modal.style.animation = 'fade-in 0.5s forwards';
})

closeModal.addEventListener('click', function() {
    modal.close()
})

submitTask.addEventListener('click', function(e) {
    e.preventDefault()
    let data = new Task
    data.taskError()
})



