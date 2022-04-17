import {PageElement, Card, Button} from './page-element.js';

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
      this.cardList = [];
      this.delay = 0.5;
      
      let clickTimeoutPrev;
      this.prev.node.addEventListener('click', () => {

        if (!clickTimeoutPrev) {
          this.changeImgPrev(0.3)
          clickTimeoutPrev = setTimeout(() => {
            clickTimeoutPrev = null;
          }, 300)
        }
      })


      let clickTimeoutNext;
      this.next.node.addEventListener('click', () => {
        if (!clickTimeoutNext) {
          this.changeImgNext(0.3)
          clickTimeoutNext = setTimeout(() => {
            clickTimeoutNext = null;
          }, 300)
        }
      })

    }

    createCards() {
      this.sliderMain = new PageElement(this.slider.node, 'div', 'slider-main');
      for (let i = 0; i < this.cardQuantity; i++) {
        this.cardList.push(new Card(this.sliderMain.node, 'card card-slider', i + 1))
      }
      this.indexMovedCard = this.cardList.length - 1;
      this.translateCards();
    }

    translateCards() {
      this.cardList.forEach((card, i) => {
        let delay = this.delay
        let position = 0;
        if ((i + this.offset) < this.cardList.length) {
          position = i + this.offset
        }
        if ((i + this.offset) > this.cardList.length) {
          position = i + this.offset - this.cardList.length
        }

        if (this.isPrev) {
          if (i === this.indexMovedCard - 1) {
            delay = 0;
          }
        } else {
          if (i === this.indexMovedCard) {
            delay = 0;
          }
        }

        if (position === 0) {
          card.node.style.transform = `translate(${position * 100}%)`;
          card.node.style.transitionDuration = `${delay}s`;
        } else if (position === this.cardList.length - 1) {
          card.node.style.transform = `translate(calc(-100% - ${this.gap}px))`;
          card.node.style.transitionDuration = `${delay}s`;
          } else {
            card.node.style.transform = `translate(calc(${position * 100}% + ${position * this.gap}px))`;
            card.node.style.transitionDuration = `${delay}s`;
          }
      })

      
    }

    changeImgPrev(delay) {
        this.slider.node.style.overflow = 'hidden';
        setTimeout (() => {
          this.slider.node.style.overflow = 'visible';
        }, 300)

        this.isPrev = true;
        this.delay = delay;

        if (this.offset !== 0) {
          this.offset -= 1;
        } else {
          this.offset = this.cardList.length - 1;
        }
      
        if (this.indexMovedCard < this.cardList.length) {
          this.indexMovedCard += 1;
        } else {
          this.indexMovedCard = 1;
        }
        
        this.translateCards();
     
    }

    changeImgNext() {
        this.slider.node.style.overflow = 'hidden';
        setTimeout (() => {
          this.slider.node.style.overflow = 'visible';
        }, 300)
        
        this.isPrev = false;

        if (this.offset !== this.cardList.length - 1) {
          this.offset += 1;
        } else {
          this.offset = 0;
        }

        if (this.indexMovedCard !== 0) {
          this.indexMovedCard -= 1;
        } else {
          this.indexMovedCard = this.cardList.length - 1;
        }

        this.translateCards();

    }

    resizeSlider(cardQuantity, cardGap) {
      if (this.cardQuantity !== cardQuantity) {
        this.sliderMain.node.remove();
        this.cardQuantity = cardQuantity;
        this.gap = cardGap;
        this.offset = 0;
        this.cardList = [];
        this.createCards();
      }
    }
}
