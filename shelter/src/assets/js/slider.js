import {PageElement, Card, Button} from './page-element.js';

export class Slider extends PageElement {
    constructor(parent, className) {
      super(parent, 'div', className);
      this.sliderWrap = new PageElement(this.node, 'div', 'slider-wrap');
      this.slider = new PageElement(this.sliderWrap.node, 'div', 'slider');
      this.sliderMain = new PageElement(this.slider.node, 'div', 'slider-main');
      this.prev = new PageElement(this.node, 'div', 'button-arrow left', '←');
      this.next = new PageElement(this.node, 'div', 'button-arrow right', '→');
      this.offset = 0;
      this.cardList = [];

      this.prev.node.onclick = () => {
        this.changeImgPrev()
      };

      this.next.node.onclick = () => {
        this.changeImgNext()
      };
    }
  
    createCards(cardQuantity) {
      this.cardQuantity = cardQuantity;
      for (let i = 1; i <= this.cardQuantity; i++) {
        this.cardList.push(new Card(this.sliderMain.node, 'card', i))
      }
    }

    changeImgPrev() {
        this.slider.node.style.overflow = 'hidden';
        this.sliderMain.node.style.transform = `translate(calc(-1 * (${this.offset}% + ${270 + 90}px)))`;
        this.offset += 360 / 2790 * 100;
        //console.log(this.sliderMain.node.style.transform)
    }

    changeImgNext() {

        this.slider.node.style.overflow = 'hidden';
        this.sliderMain.node.style.transform = `translate(calc(-1 * (${this.offset}% - ${270 + 90}px)))`;
        this.offset -= 360 / 2790 * 100;
        //console.log(this.sliderMain.node.style.transform)
    }
}

let j = 0