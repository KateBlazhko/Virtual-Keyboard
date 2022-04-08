import mainStyle from './style.scss';
import {Slider} from '../assets/js/page-element.js';


const contentSlider = document.querySelector('.slider');
const sliderMain = new Slider(contentSlider, 'slider-main');

//console.log (document.documentElement.clientWidth);
sliderMain.createCards(8);