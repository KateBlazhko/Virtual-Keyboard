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
    this.lang = lang
    this.node.textContent = this.defaultValue[`${this.lang}`];  

  }

  getSymbol() {
    return this.node.textContent
  }

  caps(isCaps) {
    this.isCaps = isCaps;
    if (this.isCaps) {
      this.node.textContent = this.node.textContent.toUpperCase()
    } else {
      this.node.textContent = this.node.textContent.toLowerCase()
    }
  }

  shift(isShift) {
    this.isShift = isShift
    if (this.isShift) {
      if (this.shiftValue) {
        if (this.shiftValue[`${this.lang}`]) {
          this.node.textContent = this.shiftValue[`${this.lang}`].toUpperCase()
        } else if (this.defaultValue[`${this.lang}`]) {
          this.node.textContent = this.defaultValue[`${this.lang}`].toUpperCase()
          } else {
            this.node.textContent = this.shiftValue.en
          }

      } else {

        if (this.defaultValue[`${this.lang}`]) {
          this.node.textContent = this.defaultValue[`${this.lang}`].toUpperCase()
        } else {
          this.node.textContent = this.defaultValue.en.toUpperCase()
        }
      }
    } else {
      this.node.textContent = this.defaultValue[`${this.lang}`] || this.defaultValue.en
    }
  }

  switchLang(lang) {
    this.lang = lang
    this.node.textContent = this.defaultValue[`${lang}`] || this.defaultValue.en

    if (this.isShift) {
      this.shift(this.isShift)
    }

    if (this.isCaps) {
      this.caps(this.isCaps)
    }

  }
}

export {SymbolKey, FuncionKey} 