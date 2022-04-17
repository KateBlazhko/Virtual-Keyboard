import * as myFunc from './function.js';
 
function toggleMenu() { 
  menuToggle.onmousedown = function() {
    return false;
  };

  myFunc.toggleClassName('active', menuToggle, menu);
  myFunc.toggleClassName('lock', body);
  const bodyLock = document.querySelector('.lock');
  bodyLock && bodyLock.addEventListener('click', closeMenu);
}

function closeMenu(event) {
    if (event.target.classList.contains('nav-link') ||
       (event.target.classList.contains('lock'))) {
        myFunc.removeClassName('active', menuToggle, menu);
        myFunc.removeClassName('lock', body);
    }
}


// burger-menu
const body = document.body;

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);