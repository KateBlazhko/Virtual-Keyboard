import mainStyle from './style.scss';
import {Slider} from '../assets/js/slider.js';
import burger from '../assets/js/burger.js';



const contentSlider = document.querySelector('.pets-content');
const sliderMain = new Slider(contentSlider, 'slider-container');

//console.log (document.documentElement.clientWidth);
sliderMain.createCards(8);