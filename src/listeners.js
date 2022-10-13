export { menuToggle }

const menuToggle = document.getElementById('menuToggle')
const sideMenu = document.getElementById('sideMenu')
const pageInterface = document.getElementById('pageInterface')

menuToggle.addEventListener('click', function() {
    sideMenu.classList.toggle('visible')
    pageInterface.classList.toggle('visible')
})