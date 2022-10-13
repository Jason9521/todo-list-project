import './style.css';
import { menuToggle, sideMenu } from './listeners';

const addTask = document.getElementById('addTask');
const closeModal = document.getElementById('closeModal')
const modal = document.getElementById('modal')

addTask.addEventListener('click', function() {
    modal.style.visibility = 'visible'
})

closeModal.addEventListener('click', function() {
    modal.style.visibility = 'hidden'
    
})