import mainStyle from './style.scss';
import {Slider} from '../assets/js/slider.js';
import burger from '../assets/js/burger.js';


let cardQuantity = getcardQuantity();
let cardGap = getCardGap();
const contentSlider = document.querySelector('.pets-content');
const sliderPets = new Slider(contentSlider, 'slider-container', cardQuantity, cardGap);
sliderPets.createCards();

function getcardQuantity(){
    return (window.innerWidth >= 1280) ? 9 :
           (window.innerWidth >= 768) ? 6 : 3
}

function getCardGap(){
    return (window.innerWidth >= 1024) ? 90 :
           (window.innerWidth >= 768) ? 40 : 0
}

window.addEventListener('resize', () => {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        cardQuantity = getcardQuantity();
        cardGap = getCardGap();
        //arrayIndexes = getArray();
        sliderPets.resizeSlider(cardQuantity, cardGap);
      }, 50)
    }
})