import petsStyle from "./pets.scss";
import burger from '../assets/js/burger.js';
import {Pagination} from '../assets/js/pagination.js';

const contentSlider = document.querySelector('.pets-content');
const paginationPets = new Pagination(contentSlider, 'pagination');

let cardQuantity = getcardQuantity();;
paginationPets.createCards(cardQuantity);

function getcardQuantity(){
  return (window.innerWidth >= 1280) ? 8 :
         (window.innerWidth >= 768) ? 6 : 3
}

let resizeTimeout;
window.addEventListener('resize', () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        cardQuantity = getcardQuantity()
        paginationPets.recreateCards(cardQuantity);
      }, 50)
    }
})

