import petsStyle from "./pets.scss";
import burger from '../assets/js/burger.js';
import {Pagination} from '../assets/js/pagination.js';
import * as myFunc from '../assets/js/function.js';

let cardQuantity = getcardQuantity();
let arrayIndexes = getArray();
const contentSlider = document.querySelector('.pets-content');
const paginationPets = new Pagination(contentSlider, 'pagination', cardQuantity, arrayIndexes);

function getcardQuantity(){
  return (window.innerWidth >= 1280) ? 8 :
         (window.innerWidth >= 768) ? 6 : 3
}

function getArray() {
  let arrayPages = []

  for (let i = 1; i <= 6; i++) {
    let arrayCards = [];
    for (let j = 1; j <= 8; j++) {
      arrayCards.push(j);
    }
    myFunc.randomSort(arrayCards);

    arrayPages.push(...arrayCards);
  }

  return myFunc.checkArr(arrayPages, cardQuantity)
}

let resizeTimeout;
window.addEventListener('resize', () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        let newCardQuantity = getcardQuantity();
        if (newCardQuantity !== cardQuantity) {
          cardQuantity = newCardQuantity
          arrayIndexes = getArray();
          paginationPets.resizePagination(cardQuantity, arrayIndexes);
        }
        resizeTimeout = null;
      }, 66)

    }
})

