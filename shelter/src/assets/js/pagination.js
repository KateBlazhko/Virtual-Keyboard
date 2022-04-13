import {PageElement, Card, Link} from './page-element.js';

export class Pagination extends PageElement {
  constructor(parent, className, cardQuantity) {
    super(parent, 'div', className);
    this.cardQuantity = cardQuantity;
    this.pageQuantity = Math.ceil(8 / this.cardQuantity);

    this.paginationControls = new Controls(this.node, 'pagination-controls');
    this.paginationControls.setpageQuantity(this.pageQuantity);

    this.paginationPets = new PageElement(this.node, 'div', 'pagination-pets');
    this.paginationPetsDouble = new PageElement(this.node, 'div', 'pagination-pets-double');
    this.isDouble = false;
    this.offset = 0;

    this.cardList = this.createCards();
  }

  createCards() {
    this.onclick();
    this.setViewControls();
    let cardList = []
    for (let i = (1 + this.offset); i <= this.cardQuantity; i++) {
      cardList.push(new Card(this.paginationPets.node, 'card', i))
    }
    return cardList
  }

  recreateCards(cardQuantity) {
    this.paginationPets.node.innerHTML = '';
    this.cardQuantity = cardQuantity;
    this.pageQuantity = Math.ceil(8 / this.cardQuantity);
    this.paginationControls.setpageQuantity(this.pageQuantity);
    this.setViewControls();
    for (let i = (1 + this.offset); i <= this.cardQuantity; i++) {
      this.cardList.push(new Card(this.paginationPets.node, 'card', i))
    }
  }

  setViewControls() {
    this.paginationControls.setViewControls()
  }

  onclick() {
    for (let key in this.paginationControls.listControls) {
      let control = this.paginationControls.listControls[key].node;
      console.log(control);
      control.onclick = () => {

        this.paginationControls.handleChange(key);
      }
    }
  }

  updateCards() {

  }
}

class Controls extends PageElement {
  constructor(parent, className) {
    super(parent, 'div', className);
    this.listControls = {
      leftScroll: new Link (this.node, 'controls-button', '<<', '##'),
      prev: new Link (this.node, 'controls-button', '<', '##'),
      currentPage: new Link (this.node, 'controls-button', '1', '##'),
      next: new Link (this.node, 'controls-button', '>', '##'),
      rightScroll: new Link (this.node, 'controls-button', '>>', '##'),
    };
  }

  handleChange(key) {
    let currentPage = this.listControls.currentPage.node;
    let numberPage = +this.listControls.currentPage.node.textContent;
    switch (key) {
      case 'leftScroll':
        currentPage.textContent = '1';
        this.setViewControls();
        break;
      case 'prev':
        currentPage.textContent = `${numberPage - 1}`;
        this.setViewControls();
        break;
      case 'next':
        currentPage.textContent = `${numberPage + 1}`;
        this.setViewControls();
        break;
      case 'rightScroll':
        let pageQuantity = this.getpageQuantity();
        currentPage.textContent = `${pageQuantity}`;
        this.setViewControls();
        break;
    }
  }
  

  setViewControls() {
    let currentPage = this.listControls.currentPage.node;
    let rightScroll = this.listControls.rightScroll.node;
    let leftScroll = this.listControls.leftScroll.node;
    let prev = this.listControls.prev.node;
    let next = this.listControls.next.node;
    currentPage.style.pointerEvents = 'none';
    currentPage.classList.add('active');

    if (currentPage.textContent === '1') {
      leftScroll.classList.add('inactive');
      prev.classList.add('inactive');
    } else {
      leftScroll.classList.remove('inactive');
      prev.classList.remove('inactive');
    }

    let pageQuantity = this.getpageQuantity();
    if (currentPage.textContent === `${pageQuantity}`) {
      rightScroll.classList.add('inactive');
      next.classList.add('inactive');
    } else {
      rightScroll.classList.remove('inactive');
      next.classList.remove('inactive');
    }
  }

  setpageQuantity(pageQuantity) {
    this.pageQuantity = pageQuantity
  }

  getpageQuantity() {
    return this.pageQuantity
  }
}

