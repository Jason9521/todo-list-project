'use strict'

export {addTask, closeModal, submitTask}

const addTask = document.getElementById('addTask');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const submitTask = document.getElementById('submitTask');
const taskTitle = document.getElementById('taskTitle')
const taskDescription = document.getElementById('taskDescription')
const taskProject = document.getElementById('taskProject')
const taskPriority = document.getElementById('taskPriority')
const dueDate = document.getElementById('dueDate')

let dataArray = []

class Task {

    constructor() {
        this.title = taskTitle.value;
        this.description = taskDescription.value;
        this.project = taskProject.value;
        this.priority = taskPriority.value;
        this.dueDate = dueDate.value;
    }

    storeData() {
        dataArray.push(this)
    }

    displayData() {

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
    data.storeData()

    taskTitle.value = ''
    taskDescription.value = ''
    taskProject.value = ''
    taskPriority.value = ''
    dueDate.value = ''

    modal.close()
    
})

