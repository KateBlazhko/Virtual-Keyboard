import PageElement from './common/pageElement';
import Keybord from './keyboard';

export default class Application extends PageElement {
  constructor(parent) {
    super(parent, 'div', 'app');
    this.isCaps = false;
    this.isShift = false;
    this.isCtrl = false;
    this.isAlt = false;

    this.node.setAttribute('tabindex', '1');

    this.node.onkeydown = (e) => {
      if (e.code.match(/Caps/)) {
        this.caps();
      }

      if (e.code.match(/Shift/)) {
        this.isShift = false;
        this.resetPress({ isAlt: this.isAlt, isShift: true, isCtrl: this.isCtrl });
      }

      if (e.code.match(/Control/)) {
        this.isCtrl = true;
        if (this.isAlt) {
          this.keyboard.switchLang();
        }
        this.resetPress({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: false });
      }

      if (e.code.match(/Alt/)) {
        this.isAlt = true;
        if (this.isCtrl) {
          this.keyboard.switchLang();
        }
        this.resetPress({ isAlt: false, isShift: this.isShift, isCtrl: this.isCtrl });
      }

      this.keyboard.onMark(e);
      this.textArea.node.focus();
    };

    this.node.onkeyup = (e) => {
      if (e.code.match(/Caps/)) {
        return;
      }

      if (e.code.match(/Shift/)) {
        this.shift();
      }

      if (e.code.match(/Control/)) {
        this.ctrl();
      }

      if (e.code.match(/Alt/)) {
        this.alt();
      }

      this.keyboard.offMark(e);
    };

    this.node.onmousedown = () => {
      this.textArea.node.focus();
      this.pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false;

      if (this.pressKey) {
        if (this.pressKey.getSymbol) {
          const symbol = this.pressKey.getSymbol();
          this.printSymbol(symbol);
          this.keyboard.onMark(this.pressKey);
          this.resetPress({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: this.isCtrl });
          return;
        }

        if (this.pressKey.code.match(/Shift/)) {
          if (this.isShift) {
            if (this.pressKey === this.pressShift) {
              this.resetPress({ isAlt: false, isShift: this.isShift, isCtrl: false });
              return
            }
            this.keyboard.offMark(this.pressShift);
          } else {
            this.shift();
          }

          this.pressShift = this.pressKey;
          this.keyboard.onMark(this.pressKey);
          this.resetPress({ isAlt: this.isAlt, isShift: false, isCtrl: this.isCtrl });
          return;
        }

        if (this.pressKey.code.match(/Control/)) {
          if (this.isCtrl) {
            if (this.pressKey === this.pressCtrl) {
              this.resetPress({ isAlt: false, isShift: false, isCtrl: this.isCtrl });
              return
            }
            this.keyboard.offMark(this.pressCtrl);
          } else {
            this.ctrl();
          }

          this.pressCtrl = this.pressKey;
          this.keyboard.onMark(this.pressKey);

          if (this.isAlt) {
            this.keyboard.switchLang();
            setTimeout(() => {
              this.resetPress({ isAlt: false, isShift: false, isCtrl: this.isCtrl });
            }, 66);
          }
          this.resetPress({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: false });
          return;
        }

        if (this.pressKey.code.match(/Alt/)) {
          if (this.isAlt) {
            if (this.pressKey === this.pressAlt) {
              this.resetPress({ isAlt: this.isAlt, isShift: false, isCtrl: false });
              return
            }
            this.keyboard.offMark(this.pressAlt);
          } else {
            this.alt();
          }

          this.pressAlt = this.pressKey;
          this.keyboard.onMark(this.pressKey);

          if (this.isCtrl) {
            this.keyboard.switchLang();
            setTimeout(() => {
              this.resetPress({ isAlt: this.isAlt, isShift: false, isCtrl: false });
            }, 66);
          }

          this.resetPress({ isAlt: false, isShift: this.isShift, isCtrl: this.isCtrl });
          return;
        }

        if (this.pressKey.code.match(/Caps/)) {
          if (this.isCaps) {
            this.keyboard.offMark(this.pressKey);
          } else {
            this.keyboard.onMark(this.pressKey);
          }

          this.caps();
          return;
        }

        this.keyboard.onMark(this.pressKey);
        this.defineFunction();
        this.resetPress({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: this.isCtrl });
      }
    };

    this.node.onmouseup = () => {
      this.textArea.node.focus();

      if (this.pressKey) {
        if (this.pressKey.code.match(/Shift/)) {
          return;
        }

        if (this.pressKey.code.match(/Caps/)) {
          return;
        }

        if (this.pressKey.code.match(/Control/)) {
          return;
        }

        if (this.pressKey.code.match(/Alt/)) {
          return;
        }

        this.keyboard.offMark(this.pressKey);
      }
    };
  }

  getLang() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = 'en';
    }

    this.renderKeyboard();
  }

  renderKeyboard() {
    const container = new PageElement(this.node, 'div', 'container');
    const title = new PageElement(container.node, 'h1', 'title');
    title.node.textContent = 'RSS Виртуальная клавиатура';

    this.textArea = new PageElement(container.node, 'textarea', 'textarea');
    this.textArea.node.value = '';
    this.keyboard = new Keybord(container.node, 'keyboard-wrap', this.lang);
  }

  getCursorPosition() {
    const cursorPosition = this.textArea.node.selectionStart;
    const beforeCursor = this.textArea.node.value.slice(0, cursorPosition);
    const afterCursor = this.textArea.node.value.slice(cursorPosition);
    return { cursorPosition, beforeCursor, afterCursor };
  }

  printSymbol(symbol) {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + symbol + afterCursor;
    cursorPosition += 1;
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  caps() {
    this.isCaps = !this.isCaps;
    this.keyboard.onCapsLock(this.isCaps);
  }

  shift() {
    this.isShift = !this.isShift;
    this.keyboard.onShift(this.isShift);
  }

  ctrl() {
    this.isCtrl = !this.isCtrl;
  }

  alt() {
    this.isAlt = !this.isAlt;
  }

  resetPress(needReset) {
    const { isAlt, isShift, isCtrl } = needReset;

    if (isAlt) {
      this.alt();
      this.keyboard.offMark(this.pressAlt);
    }

    if (isShift) {
      this.shift();
      this.keyboard.offMark(this.pressShift);
    }

    if (isCtrl) {
      this.ctrl();
      this.keyboard.offMark(this.pressCtrl);
    }
  }

  defineFunction() {
    const { code } = this.pressKey;

    switch (code) {
      case 'Backspace':
        this.backspace();
        break;

      case 'Delete':
        this.delete();
        break;

      case 'Tab':
        this.tab();
        break;

      case 'Space':
        this.space();
        break;

      case 'Enter':
        this.enter();
        break;

      default:
        break;
    }
  }

  backspace() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    if (cursorPosition > 0) {
      this.textArea.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
      cursorPosition -= 1;
      this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
    }
  }

  delete() {
    const { cursorPosition, beforeCursor, afterCursor } = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + afterCursor.slice(1);
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  tab() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.textArea.node.value = `${beforeCursor}\t${afterCursor}`;
    cursorPosition += 1;
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  space() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.textArea.node.value = `${beforeCursor} ${afterCursor}`;
    cursorPosition += 1;
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  enter() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.textArea.node.value = `${beforeCursor}\n${afterCursor}`;
    cursorPosition += 1;
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }
}
