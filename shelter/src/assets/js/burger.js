import * as myFunc from './function.js';
 
function toggleMenu() { 
    menuToggle.onmousedown = function() {
      return false;
    };
  
    myFunc.toggleClassName('active', menuToggle, menu, logo);
    myFunc.toggleClassName('lock', body, logoMain);
    const bodyLock = document.querySelector('.lock'); 
    bodyLock && bodyLock.addEventListener('click', closeMenu);
}
  
  
function closeMenu(event) {
    if (event.target.classList.contains('nav-link') ||
       (event.target.classList.contains('lock'))) {
        myFunc.removeClassName('active', menuToggle, menu, logo);
        console.log(body, 'body')
        console.log(logoMain, 'logoMain')
        myFunc.removeClassName('lock', body, logoMain);
    }
}


// burger-menu
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const logo = document.querySelector('.double');
const logoMain = document.querySelector('.main');
const menu = document.querySelector('.nav');
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);