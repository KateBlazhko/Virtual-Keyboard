import {PageElement, Card, Link} from './page-element.js';

export class Pagination extends PageElement {
  constructor(parent, className) {
    super(parent, 'div', className);
    this.cardList = [];

    this.paginationControls = new Controls(this.node, 'pagination-controls');

    this.paginationPets = new PageElement(this.node, 'div', 'pagination-pets');

  }

  createCards(cardQuantity) {
    this.setViewControls();
    this.cardQuantity = cardQuantity;
    for (let i = 1; i <= this.cardQuantity; i++) {
      this.cardList.push(new Card(this.paginationPets.node, 'card', i))
    }
  }

  recreateCards(cardQuantity) {
    this.paginationPets.node.innerHTML = '';
    this.cardQuantity = cardQuantity;
    for (let i = 1; i <= this.cardQuantity; i++) {
      this.cardList.push(new Card(this.paginationPets.node, 'card', i))
    }
  }

  setViewControls() {
    this.paginationControls.setViewControls()
  }

  updateCards() {

  }
}

class Controls extends PageElement {
  constructor(parent, className) {
    super(parent, 'div', className);
    console.log(this.node);
    this.leftScroll = new Link (this.node, 'controls-button', '<<', '#');
    this.prev = new Link (this.node, 'controls-button', '<', '#');
    this.currentPage = new Link (this.node, 'controls-button', '1', '#');
    this.next = new Link (this.node, 'controls-button', '>', '#');
    this.rightScroll = new Link (this.node, 'controls-button', '>>', '#');

  }

    setViewControls() {
    this.currentPage.node.style.pointerEvents = 'none';
    this.currentPage.node.classList.add('active');
    if (this.currentPage.node.textContent === '1') {
      this.leftScroll.node.classList.add('inactive');
      this.prev.node.classList.add('inactive');
    } else {
      this.leftScroll.node.classList.delete('inactive');
      this.prev.node.classList.delete('inactive');
    }
  }
}