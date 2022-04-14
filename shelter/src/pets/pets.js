import petsStyle from "./pets.scss";

import burger from '../assets/js/burger.js';
import {Pagination} from '../assets/js/pagination.js';


let arrayIndexes = getArray();
console.log(arrayIndexes)
let cardQuantity = getcardQuantity();
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
    sort(arrayCards);

    arrayPages.push(...arrayCards);
  }
  return arrayPages
}

function sort(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

window.addEventListener('resize', () => {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        cardQuantity = getcardQuantity();
        arrayIndexes = getArray();
        paginationPets.resizeCards(cardQuantity, arrayIndexes);
      }, 50)
    }
})