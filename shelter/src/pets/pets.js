import petsStyle from "./pets.scss";

import burger from '../assets/js/burger.js';
import pagination from '../assets/js/burger.js';
import {Pagination} from '../assets/js/pagination.js';


let cardQuantity = getcardQuantity();;
const contentSlider = document.querySelector('.pets-content');
const paginationPets = new Pagination(contentSlider, 'pagination', cardQuantity);
paginationPets.createCards(cardQuantity);


function getcardQuantity(){
  return (window.innerWidth >= 1280) ? 8 :
         (window.innerWidth >= 768) ? 6 : 3
}

window.addEventListener('resize', () => {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        cardQuantity = getcardQuantity()
        paginationPets.resizeCards(cardQuantity);
      }, 50)
    }
})