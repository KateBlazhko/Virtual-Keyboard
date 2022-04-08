import mainStyle from './style.scss';
import {Slider} from '../assets/js/page-element.js';


const contentSlider = document.querySelector('.pets-content-slider');
const sliderMain = new Slider(contentSlider, 'pets-content-slider-main');

sliderMain.createCards(3);