function removeClassName(className,...elements) {
    for (let element of elements) {
      element.classList.remove(className);
    }
  }

function toggleClassName(className,...elements) {
    for (let element of elements) {
      element.classList.toggle(className);
    }
}

function toggleMenu() { 
    menuToggle.onmousedown = function() {
      return false;
    };
  
    toggleClassName('active', menuToggle, menu, logo);
    toggleClassName('lock', body, logoMain);
    const bodyLock = document.querySelector('.lock'); 
    bodyLock && bodyLock.addEventListener('click', closeMenu);
}
  
  
function closeMenu(event) {
    if (event.target.classList.contains('nav-link') ||
       (event.target.classList.contains('lock'))) {
        removeClassName('active', menuToggle, menu, logo);
        removeClassName('lock', body, logoMain);
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