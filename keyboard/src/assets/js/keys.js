import { PageElement } from "./pageElement";

class Key extends PageElement {
  constructor(parent, className, textContent) {
    super(parent, 'div', className)
    this.node.textContent = textContent
    this.onClick = () => {}

    this.node.onclick = () => {
      this.onClick()
    }

  }

}

class FuncionKey extends Key {
  constructor(parent, textContent, code, secondClassName) {
    super(parent, 'key', textContent)
    this.node.className = this.node.className + ' ' + secondClassName;
    this.code = code;
  }

}

class SymbolKey extends Key {
  constructor(parent, textContent) {
    super(parent, 'key', textContent)    
  }

  getSymbol() {
    return this.node.textContent
  }
}

export {SymbolKey, FuncionKey} 