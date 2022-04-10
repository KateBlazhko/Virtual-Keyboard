import petsStyle from "./pets.scss";
import {Slider} from '../assets/js/page-element.js';
import burger from '../assets/js/burger.js';


const contentSlider = document.querySelector('.pagination');
const sliderPets = new Slider(contentSlider, 'pagination-pets');
sliderPets.createCards(8);