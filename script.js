/*-----------------
Mobile Menu
------------------*/
let toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click',function() {
    let mainMenu = document.getElementById('main-menu');
    mainMenu.classList.toggle('mobile-menu')
})