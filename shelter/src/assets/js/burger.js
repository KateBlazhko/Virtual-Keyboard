import * as myFunc from './function.js';
 
function toggleMenu() { 
    menuToggle.onmousedown = function() {
      return false;
    };
    isOpen = !isOpen;
    myFunc.toggleClassName('active', menuToggle, menu, logo);
    myFunc.toggleClassName('lock', body, logoMain);
    const bodyLock = document.querySelector('.lock'); 
    bodyLock && bodyLock.addEventListener('click', closeMenu);
}
  
  
function closeMenu(event) {
    if (event.target.classList.contains('nav-link') ||
       (event.target.classList.contains('lock'))) {
        isOpen = false;
        myFunc.removeClassName('active', menuToggle, menu, logo);
        myFunc.removeClassName('lock', body, logoMain);
    }
}


// burger-menu
let isOpen = false
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const logo = document.querySelector('.double');
const logoMain = document.querySelector('.main');
const menu = document.querySelector('.nav');
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);

;
window.addEventListener('resize', () => {
    isOpen && (function (){
                isOpen = false;
                myFunc.removeClassName('active', menuToggle, menu, logo);
                myFunc.removeClassName('lock', body, logoMain);
              }());
})