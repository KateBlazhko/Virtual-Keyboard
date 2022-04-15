import {PageElement, Card, Button} from './page-element.js';
import * as myFunc from './function.js';

export class Slider extends PageElement {
    constructor(parent, className, cardQuantity, cardGap) {
      super(parent, 'div', className);
      this.sliderWrap = new PageElement(this.node, 'div', 'slider-wrap');
      this.slider = new PageElement(this.sliderWrap.node, 'div', 'slider');
      this.prev = new PageElement(this.node, 'div', 'button-arrow left', '←');
      this.next = new PageElement(this.node, 'div', 'button-arrow right', '→');
      this.cardQuantity = cardQuantity;
      this.gap = cardGap;
      this.offset = 0;
      this.slideList = [];
      this.delay = 0.5;
      
      let clickTimeoutPrev;
      this.prev.node.onclick = () => {
        if (!clickTimeoutPrev) {
          this.toSlidePrev(0.3)
          clickTimeoutPrev = setTimeout(() => {
            clickTimeoutPrev = null;
          }, 300)
        }
      }

      let clickTimeoutNext;
      this.next.node.onclick = () => {
        if (!clickTimeoutNext) {
          this.toSlideNext(0.3)
          clickTimeoutNext = setTimeout(() => {
            clickTimeoutNext = null;
          }, 300)
        }
      }

    }

    createSlides() {
      this.sliderMain = new PageElement(this.slider.node, 'div', 'slider-main');

      for (let i = 0; i < 3; i++) {
        this.slideList.push(new PageElement(this.sliderMain.node, 'div', 'slide'))
      }

      this.indexMovedSlide = this.slideList.length - 1;

      this.createCards();
      this.translateSlides();
    }

    createCards() {
      let slideSize = this.cardQuantity / 3;
      // this.indexVisibleSlide = 1;
      // this.indexesVisibleCard = [];
      this.slideList.forEach((slide, index) => {

        for (let i = 0; i < slideSize; i++) {
          new Card(slide.node, 'card', i + 1)
          // if (this.indexVisibleSlide === index) {
          //   this.indexesVisibleCard.push(i + 1)
          // }
        } 
      })
    }

    translateSlides() {
      this.slideList.forEach((slide, i) => {
        let delay = this.delay
        let position = 0;
        if ((i + this.offset) < this.slideList.length) {
          position = i + this.offset
        }
        if ((i + this.offset) > this.slideList.length) {
          position = i + this.offset - this.slideList.length
        }

        if (this.isPrev) {
          if (i === this.indexMovedSlide - 1) {
            delay = 0;
          }
        } else {
          if (i === this.indexMovedSlide) {
            delay = 0;
          }
        }

        if (position === 0) {
          slide.node.style.transform = `translate(${position * 100}%)`;
          slide.node.style.transitionDuration = `${delay}s`;
        } else if (position === this.slideList.length - 1) {
          slide.node.style.transform = `translate(calc(-100% - ${this.gap}px))`;
          slide.node.style.transitionDuration = `${delay}s`;
          } else {
            slide.node.style.transform = `translate(calc(${position * 100}% + ${position * this.gap}px))`;
            slide.node.style.transitionDuration = `${delay}s`;
          }
      })

      
    }

    toSlidePrev(delay) {
        this.slider.node.style.overflow = 'hidden';
        setTimeout (() => {
          this.slider.node.style.overflow = 'visible';
        }, 300)

        this.isPrev = true;
        this.delay = delay;

        if (this.offset !== 0) {
          this.offset -= 1;
        } else {
          this.offset = this.slideList.length - 1;
        }
        //this.offset = myFunc.decreaseCircle(this.offset, this.slideList.length - 1)
      
        if (this.indexMovedSlide < this.slideList.length) {
          this.indexMovedSlide += 1;
        } else {
          this.indexMovedSlide = 1;
        }
        //this.indexMovedSlide = myFunc.increaseCircle(this.indexMovedSlide, this.slideList.length)
        
        this.translateSlides();
     
    }

    toSlideNext() {
        this.slider.node.style.overflow = 'hidden';
        setTimeout (() => {
          this.slider.node.style.overflow = 'visible';
        }, 300)

        this.isPrev = false;

        if (this.offset < this.slideList.length - 1) {
          this.offset += 1;
        } else {
          this.offset = 0;
        }
        //this.offset = myFunc.increaseCircle(this.offset, this.slideList.length - 1)

        if (this.indexMovedSlide !== 0) {
          this.indexMovedSlide -= 1;
        } else {
          this.indexMovedSlide = this.slideList.length - 1;
        }
        //this.indexMovedSlide = myFunc.decreaseCircle(this.indexMovedSlide, this.slideList.length - 1)

        this.translateSlides();

    }

    resizeSlider(cardQuantity, cardGap) {
      if (this.cardQuantity !== cardQuantity) {
        this.sliderMain.node.remove();
        this.cardQuantity = cardQuantity;
        this.gap = cardGap;
        this.offset = 0;
        this.slideList = [];
        this.createSlides();
      }
    }

    updateSlide() {

    }
}


export class SliderModel {
  constructor() {
    this.cardQuantity = this.getcardQuantity();
    this.cardGap = this.getCardGap();

    this.slider = new Slider(contentSlider, 'slider-container', this.cardQuantity, this.cardGap);

    let resizeTimeout;
    window.addEventListener('resize', () => {
      if (!resizeTimeout) {
        this.cardQuantity = this.getcardQuantity();
        this.cardGap = this.getCardGap();
        //arrayIndexes = getArray();
        this.slider.resizeSlider(this.cardQuantity, this.cardGap);
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
        }, 66)
      } 
    })

  }

  getcardQuantity(){
    return (window.innerWidth >= 1280) ? 9 :
           (window.innerWidth >= 768) ? 6 : 3
  }

  getCardGap(){
    return (window.innerWidth >= 1024) ? 90 :
           (window.innerWidth >= 768) ? 40 : 15
  }

  createSlider() {
    this.slider.createSlides();
  }

}


const contentSlider = document.querySelector('.pets-content');
