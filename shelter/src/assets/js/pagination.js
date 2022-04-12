import {PageElement, Card} from './page-element.js';

export class Pagination extends PageElement {
  constructor(parent, className) {
    super(parent, 'div', className);
    this.cardList = [];
  }

  createCards(cardQuantity) {
    this.cardQuantity = cardQuantity;
    for (let i = 1; i <= this.cardQuantity; i++) {
      this.cardList.push(new Card(this.node, 'card', i))
    }
  }

  recreateCards(cardQuantity) {
    this.node.innerHTML = '';
    this.cardQuantity = cardQuantity;
    for (let i = 1; i <= this.cardQuantity; i++) {
      this.cardList.push(new Card(this.node, 'card', i))
    }
  }

  updateCards() {
    
  }
}

