import { PageElement } from "./pageElement";

class Key extends PageElement {
  constructor(parent, className, code) {
    super(parent, 'div', className)

    this.code = code;
    this.onKey = () => {}

    this.node.onmousedown = () => {
      this.onKey()
    }

  }

}

class FuncionKey extends Key {
  constructor(parent, code, defaultValue) {
    super(parent, 'key', code)
    this.node.textContent = defaultValue;
    this.node.className = this.node.className + ' ' + `key_${defaultValue.toLowerCase()}`;

  }

}

class SymbolKey extends Key {
  constructor(parent, code, defaultValue, shiftValue, lang) {
    super(parent, 'key', code)  
    this.defaultValue = defaultValue
    this.shiftValue = shiftValue
    this.node.textContent = this.defaultValue[`${lang}`];  

  }

  getSymbol() {
    return this.node.textContent
  }

  caps(isCaps) {
    if (isCaps) {
      this.node.textContent = this.node.textContent.toUpperCase()
    } else {
      this.node.textContent = this.node.textContent.toLowerCase()
    }
  }

  shift(isShift, lang) {
    if (isShift) {
      if (this.shiftValue) {
        this.node.textContent = this.shiftValue[`${lang}`].toUpperCase() || 
                                this.shiftValue.en.toUpperCase()
      } else {
        this.node.textContent = this.defaultValue[`${lang}`].toUpperCase() || 
                                this.defaultValue.en.toUpperCase()
      }
    } else {
      this.node.textContent = this.defaultValue[`${lang}`] || this.defaultValue.en
    }
  }
}

export {SymbolKey, FuncionKey} 