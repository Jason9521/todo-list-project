'use strict'

import { Project, storeAllTasks, projectArray, allTasks, storeAllProjects } from "./addProject";
import { format, parseISO} from "date-fns";

export { Task , taskError, addTask, closeModal, submitTask}

const addTask = document.getElementById('addTask');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const submitTask = document.getElementById('submitTask');
const taskTitle = document.getElementById('taskTitle')
const taskProject = document.getElementById('taskProject')
const taskPriority = document.getElementById('taskPriority')
const dueDate = document.getElementById('dueDate')
const taskError = document.getElementById('taskError')

class Task {

    constructor() {
        
        this.title = taskTitle.value;
        this.project = taskProject.value;
        this.priority = taskPriority.value;
        this.dueDate = dueDate.value;
        this.formattedDate = '';
    }

    storeData() {

        allTasks.push(this);
        storeAllTasks();

        projectArray.forEach(project => {
            if (project.title == this.project) {
                project.storedTasks.push(this);
                project.loadProject();
            }
        })
    }

    showError() {
        taskError.style.visibility = 'hidden';
    }

    taskError() {

        let isTaskDuplicate = false;
        let fieldCheck = false;

        allTasks.forEach(task => {
            if (task.title == this.title) {
                isTaskDuplicate = true;
                taskError.textContent = 'Cannot use name of existing task';
                taskError.style.visibility = 'visible';
                setTimeout(() => {
                    this.showError()
                }, 5000);
            }
        })

        if (this.title == '' || this.title == null) {
            taskError.textContent = '"Title" field is required';
            taskError.style.visibility = 'visible';
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

            else if (this.project == '') {
                taskError.textContent = '"Project" field is required';
                taskError.style.visibility = 'visible';
                setTimeout(() => {
                    this.showError()
                }, 5000);
            }

            else if (this.priority == '') {
                taskError.textContent = '"Priority" field is required';
                taskError.style.visibility = 'visible';
                setTimeout(() => {
                    this.showError()
                }, 5000);
            }

            else if (this.dueDate == '') {
                taskError.textContent = '"Due Date" field is required';
                taskError.style.visibility = 'visible';
                setTimeout(() => {
                    this.showError()
                }, 5000);
            }

            else {
                fieldCheck = true;
            }

        if (fieldCheck && isTaskDuplicate == false) {
            this.formattedDate = format(parseISO(this.dueDate), 'iiii, PPP');
            this.storeData();
            this.resetValues();
            modal.close();
            storeAllProjects();
            storeAllTasks();
        }  
    }

    resetValues() {
        taskTitle.value = ''
        taskProject.value = ''
        taskPriority.value = ''
        dueDate.value = ''
    }
}

addTask.addEventListener('click', function() {
    modal.showModal();
    modal.style.animation = 'fade-in 0.5s forwards';
})

closeModal.addEventListener('click', function() {
    modal.close();
})

submitTask.addEventListener('click', function(e) {
    e.preventDefault()
    let data = new Task
    data.taskError()
})
