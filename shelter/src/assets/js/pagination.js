import {PageElement, Card, Link} from './page-element.js';

export class Pagination extends PageElement {
  constructor(parent, className) {
    super(parent, 'div', className);
    this.cardList = [];

    this.paginationControls = new PageElement(this.node, 'div', 'pagination-controls');
    this.leftScroll = new Link (this.paginationControls.node, 'controls-button', '<<', '#');
    this.prev = new Link (this.paginationControls.node, 'controls-button', '<', '#');
    this.page = new Link (this.paginationControls.node, 'controls-button', '1', '#');
    this.next = new Link (this.paginationControls.node, 'controls-button', '>', '#');
    this.rightScroll = new Link (this.paginationControls.node, 'controls-button', '>>', '#');

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
    this.page.node.style.pointerEvents = 'none';
    this.page.node.classList.add('active');
    console.log(this.page.node.textContent);
    if (this.page.node.textContent === '1') {
      this.leftScroll.node.classList.add('inactive');
      this.prev.node.classList.add('inactive');
    } else {
      this.leftScroll.node.classList.delete('inactive');
      this.prev.node.classList.delete('inactive');
    }
  }

  updateCards() {

  }
}

