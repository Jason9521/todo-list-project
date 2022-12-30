'use strict'

import './style.css';
import { menuToggle } from './menuToggle';
import { Task, addTask, closeModal, submitTask, taskArray } from './addTask';
import { Project, storeAllTasks, storeAllProjects, fetchProjects, fetchAllTasks, projectArray, allTasks } from './addProject';

// Create Default Projects

let inbox = new Project
let today = new Project
let week = new Project

inbox.title = "Inbox"
today.title = "Today"
week.title = "This Week"

if (localStorage.length == 0) {
    inbox.storeProject()
    today.storeProject()
    week.storeProject()
} else {
    fetchProjects()
}

clearStoredTasks()

if (localStorage.length == 2) {
    fetchAllTasks()
}

disperseTasks()
displayProjects()
inbox.displayTasks()


// Display data in localStorage

function disperseTasks() {
    allTasks.forEach(task => {
        if (task.title != '') {
            projectArray.forEach(project => {
                if (task.project == project.title) {
                    project.storedTasks.push(task)
                }
            })
        }
    })
}

function displayProjects() {
    projectArray.forEach(project => {
        if (project != projectArray[0] && 
            project != projectArray[1] && 
            project != projectArray[2]) {
                project.createProjectBtn()
                project.addOption()
        }
    })
}

function clearStoredTasks() {
    projectArray.forEach(project => {
        project.storedTasks = []
    })
}