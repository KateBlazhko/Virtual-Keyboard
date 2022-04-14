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
  
    toggleClassName('active', menuToggle, menu);
    toggleClassName('lock', body);
    const bodyLock = document.querySelector('.lock'); 
    bodyLock && bodyLock.addEventListener('click', closeMenu);
}
  
  
function closeMenu(event) {
    if (event.target.classList.contains('nav-link') ||
       (event.target.classList.contains('lock'))) {
        removeClassName('active', menuToggle, menu);
        removeClassName('lock', body);
    }
}


// burger-menu
const body = document.body;

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);