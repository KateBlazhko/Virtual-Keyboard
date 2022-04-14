export class PageElement {
    constructor(node, tagName = 'div', className = '', content = '') {
      const el = document.createElement(tagName);
      el.className = className;
      el.innerHTML = content;
      this.node = el;
      node.append(el);
    }
  }

export class Link extends PageElement {
    constructor(parent, className, textContent, href) {
      super(parent, 'a', className);
      this.node.textContent = textContent;
      this.node.href = href;
    }
}

class Image extends PageElement {
    constructor(parent, className, src, alt) {
      super(parent, 'img', className);
      this.node.src = src;
      this.node.alt = alt;
    }
}

export class Card extends PageElement {
    constructor(parent, className, cardNumber) {
      super(parent, 'div', className);
      this.cardNumber = cardNumber;
      this.img = new Image(this.node, 'card-img', `assets/img/${cardNumber}.png`, `pets-img`);
      this.name = new PageElement(this.node, 'div','card-name', `${petNames[cardNumber-1]}`);
      this.button = new Link(this.node, 'card-button', 'Learn more', '#slider');
    }

}

export class Button extends PageElement {
  constructor(parent, className, textContent, type="button") {
    super(parent, 'button', className);
    this.node.textContent = textContent;
    this.node.type = type;
  }
}

const petNames = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];

