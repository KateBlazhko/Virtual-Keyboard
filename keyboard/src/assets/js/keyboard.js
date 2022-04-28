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
        this.isPress = true
      }
    })
  }

  setPressKey(pressKey) {
    this.pressKey = pressKey
  } 

  getPressKey() {
    return this.isPress ? this.pressKey : null
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

    // this.textArea.node.oninput = () => {
    //   this.getCursorPosition();
    // }

    this.keyboard.node.onmousedown = () => {
      this.textArea.node.focus();
      let pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false
      if (!pressKey) return false
      
      if (pressKey instanceof SymbolKey) {
        let symbol = pressKey.getSymbol();

        this.printSymbol(symbol);

      } else {
        
        this.defineFunction(pressKey);
      }
    }

    this.keyboard.node.onmouseup = () => {
      //this.textArea.node.focus();
    }
  } 

  getCursorPosition() {
    let cursorPosition = this.textArea.node.selectionStart;
    let beforeCursor = this.textArea.node.value.slice(0, cursorPosition);
    let afterCursor = this.textArea.node.value.slice(cursorPosition);
    return {
      cursorPosition,
      beforeCursor,
      afterCursor,
    }
  }

  defineFunction(pressKey) {
    let code = pressKey.code

    switch (code) {
      case 'Backspace':
        this.backspace()
        break;

      case 'CapsLock':
        this.caps()
        break;

      case 'Delete':
        this.delete()
        break;

      case 'Tab':
        this.tab()
        break;
    }

  }

  printSymbol(symbol) {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + symbol + afterCursor;
    cursorPosition += 1
    this.textArea.node.selectionStart = cursorPosition;
  }

  backspace() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
    cursorPosition -= 1;
    this.textArea.node.selectionStart = cursorPosition;
  }

  caps() {
    this.isCaps = !this.isCaps;
    this.keyboard.renderKeyboard(this.isCaps);
  }

  delete() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + afterCursor.slice(1);
    this.textArea.node.selectionStart = cursorPosition;
  }

  tab() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();
    this.textArea.node.value = beforeCursor + '\t' + afterCursor;
    cursorPosition += '\t'.length
    this.textArea.node.selectionStart = cursorPosition;
  }
}