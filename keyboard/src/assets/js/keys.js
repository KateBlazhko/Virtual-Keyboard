import { PageElement } from "./pageElement";

class Key extends PageElement {
  constructor(parent, className, textContent, code) {
    super(parent, 'div', className)
    this.node.textContent = textContent;
    this.code = code;
    this.onClick = () => {}

    this.node.onmousedown = () => {
      this.onClick()
    }

  }

}

class FuncionKey extends Key {
  constructor(parent, textContent, code, secondClassName) {
    super(parent, 'key', textContent, code)
    this.node.className = this.node.className + ' ' + secondClassName;

  }

}

class SymbolKey extends Key {
  constructor(parent, textContent, code) {
    super(parent, 'key', textContent, code)    
  }

  getSymbol() {
    return this.node.textContent
  }

  update(isCaps) {
    if (isCaps) {
      this.node.textContent = this.node.textContent.toUpperCase()
    } else {
      this.node.textContent = this.node.textContent.toLowerCase()
    }
  }
}

export {SymbolKey, FuncionKey} 