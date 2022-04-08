import petsStyle from "./pets.scss";
import {Slider} from '../assets/js/page-element.js';


const contentSlider = document.querySelector('.pets-content-slider');
const sliderPets = new Slider(contentSlider, 'pets-content-slider-pets');
sliderPets.createCards(8);