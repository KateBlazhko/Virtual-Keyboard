import { PageElement } from "./pageElement";
import { keysData } from "./keysData"

import { SymbolKey, FuncionKey } from "./keys";

export class Keybord extends PageElement {
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
    this.onKeyboard =() => {};
    this.offKeyboard =() => {};
    this.lang = lang
    this.isCaps = false
    this.renderKeyboard();

    this.node.onmousedown = () => this.onKeyboard()
    this.node.onmouseup = () => this.offKeyboard()
  }

  renderKeyboard() {

    this.keyList = [];

    keysData.forEach((row, i)=> {
      
      this.rows[i].node.innerHTML = '';

      row.forEach(key => {
        if (key.type === "Symbol") {
          let textContent = key[`${this.lang}`];
          this.keyList.push(new SymbolKey(this.rows[i].node, textContent, key.code))
        } else {
          let textContent = key.en
          this.keyList.push(new FuncionKey(this.rows[i].node, textContent, key.code, `key_${key.en.toLowerCase()}`))
        }
      })
    });
    this.onKeys();
  }

  onKeys() {
    this.keyList.forEach(key => {
      key.onKey = () => {
        this.pressKey = key
        this.isPress = true
      }
    })
  }

  getPressKey() {
    return this.isPress ? this.pressKey : null
  } 

  onCapsLock() {
    this.isCaps = !this.isCaps;
    this.keyList.forEach(key =>{
      key.update && key.update(this.isCaps)
    })
  }

  onMark(e) {
    this.markKey = this.keyList.find(key => key.code === e.code) || null
    if (this.markKey) {
      this.markKey.node.classList.toggle('mark');
    }
  }

  offMark(e) {
    this.markKey = this.keyList.find(key => key.code === e.code) || null
    if (this.markKey) {
      this.markKey.node.classList.remove('mark');
    }
  }

}