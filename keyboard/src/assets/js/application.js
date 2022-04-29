import { PageElement } from "./pageElement";
import { Keybord } from "./keyboard";

export class Application extends PageElement{
  constructor(parent) {
    super(parent, 'div', 'app')
    const container = new PageElement(this.node, 'div', 'container');
    const title = new PageElement(container.node, 'h1', 'title', 'RSS Виртуальная клавиатура');
    this.textArea = new PageElement(container.node, 'textarea', 'textarea');
    this.textArea.node.value = '';
    this.lang = 'en';
    this.keyboard = new Keybord(container.node, 'keyboard-wrap', this.lang);

    this.node.setAttribute('tabindex', '1');

    this.node.onkeydown = (e) => {
      if (e.code === 'CapsLock') {
        this.caps()
      }
      this.keyboard.onMark(e);
      this.textArea.node.focus();

    }

    this.node.onkeyup = (e) => {
      if (e.code !== 'CapsLock') {

        this.keyboard.offMark(e);
      }

      this.keyboard.node.focus();
    }

    this.keyboard.onKeyboard = () => {
      this.textArea.node.focus();
      let pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false

      if (pressKey) {

        if (pressKey.getSymbol) {
          let symbol = pressKey.getSymbol();
          this.printSymbol(symbol);
  
        } else {
          this.defineFunction(pressKey);
        }

      } 
    }

    this.keyboard.offKeyboard = () => {
      this.textArea.node.focus();
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
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
  }

  backspace() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();
    
    if (cursorPosition > 0) {
      this.textArea.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
      cursorPosition -= 1;
      this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
    }

  }

  caps() {
    this.keyboard.onCapsLock();
  }

  delete() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + afterCursor.slice(1);
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
  }

  tab() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + '\t' + afterCursor;
    cursorPosition += 1
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }
}