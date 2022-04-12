import petsStyle from "./pets.scss";

import burger from '../assets/js/burger.js';
import pagination from '../assets/js/burger.js';
import {Pagination} from '../assets/js/pagination.js';

const contentSlider = document.querySelector('.pagination');
const paginationPets = new Pagination(contentSlider, 'pagination-pets');

let cardQuantity = getcardQuantity();;
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
        paginationPets.recreateCards(cardQuantity);
      }, 50)
    }
})