import { PageElement } from "./pageElement";
import { keysData } from "./keysData"

import { SymbolKey, FuncionKey } from "./keys";

class Keybord extends PageElement {
  constructor(parent, className, lang) {
    super(parent, 'div', className)
    const keyboard = new PageElement(this.node, 'div', 'keyboard');
    this.rows = [
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
    ]
    this.lang = lang
    this.renderKeyboard();
  }

  renderKeyboard(caps = false) {
    this.caps = caps
    this.keyList = [];

    keysData.forEach((row, i)=> {
      this.rows[i].node.innerHTML = '';

      row.forEach(key => {
        if (key.type === "Symbol") {
          let textContent

          if (this.caps) {
            textContent = key[`${this.lang}`].toUpperCase();
          } else {
            textContent = key[`${this.lang}`];
          }

          this.keyList.push(new SymbolKey(this.rows[i].node, textContent))

        } else {
          let textContent = key.en
          this.keyList.push(new FuncionKey(this.rows[i].node, textContent, key.code, `key_${key.en.toLowerCase()}`))
        }
      })
    });
    this.onClick();
  }

  onClick() {
    this.keyList.forEach(key => {
      key.onClick = () => {
        this.setPressKey(key)
      }
    })
  }

  setPressKey(pressKey) {
    this.pressKey = pressKey
  } 

  getPressKey() {
    return this.pressKey
  } 

}

export class Application {
  constructor() {
    this.lang = 'en';
    const container = new PageElement(document.body, 'div', 'container')
    const title = new PageElement(container.node, 'h1', 'title', 'RSS Виртуальная клавиатура')
    this.textArea = new PageElement(container.node, 'textarea', 'textarea')
    this.keyboard = new Keybord(container.node, 'keyboard-wrap', this.lang)
    this.keyboard.node.setAttribute('tabindex', '1');
    this.textArea.node.value = '';
    this.isCaps = false

    this.keyboard.node.onclick = () => {
      let pressKey = this.keyboard.getPressKey();
      if (pressKey instanceof SymbolKey) {
        let symbol = pressKey.getSymbol()
        this.printSymbol(symbol);
      } else {
        this.defineFunctionKey(pressKey);
      }
    }
  }

  defineFunctionKey(pressKey) {
    let code = pressKey.code
    if (code === 'Backspace') {
      this.backspace()
    }
    if (code === 'CapsLock') {
      this.caps()
    }
  }

  printSymbol(symbol) {
    this.textArea.node.value += symbol
  }

  backspace() {
    let value = this.textArea.node.value
    value = value.slice(0, value.length - 1);
    this.textArea.node.value = value
  }

  caps() {
    this.isCaps = !this.isCaps
    this.keyboard.renderKeyboard(this.isCaps)
  }

}