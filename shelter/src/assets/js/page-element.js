export class PageElement {
    constructor(node, tagName = 'div', className = '', content = '', isAppend = true) {
      const el = document.createElement(tagName);
      el.className = className;
      el.innerHTML = content;
      this.node = el;

      if (isAppend) node.append(el);
      else node.prepend(el)
    }
  }

export class Link extends PageElement {
    constructor(parent, className, textContent, href) {
      super(parent, 'a', className);
      this.node.textContent = textContent;
      this.node.href = href;
    }
}

export class Image extends PageElement {
    constructor(parent, className, src, alt) {
      super(parent, 'img', className);
      this.node.src = src;
      this.node.alt = alt;
    }
}

export class Button extends PageElement {
  constructor(parent, className, textContent, type="button") {
    super(parent, 'button', className);
    this.node.textContent = textContent;
    this.node.type = type;
  }
}


