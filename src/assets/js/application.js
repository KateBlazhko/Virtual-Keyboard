import PageElement from './common/pageElement';
import Keybord from './keyboard';
import TextArea from './textarea';

export default class Application extends PageElement {
  constructor(parent) {
    super(parent, 'div', 'app');
    this.isCaps = false;
    this.isShift = false;
    this.isCtrl = false;
    this.isAlt = false;

    this.node.setAttribute('tabindex', '1');

    this.node.focus();

    this.node.onkeydown = (e) => {
      this.keyboard.setPressKey(e);
      this.pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false;

      if (this.pressKey) {
        if (this.pressKey.code.match(/Caps/)) {
          this.caps();
          return;
        }

        if (e.code.match(/Shift/)) {
          this.isShift = false;
          this.resetKeys({ isAlt: this.isAlt, isShift: true, isCtrl: this.isCtrl });
          this.keyboard.onMark(e);
          return;
        }

        if (e.code.match(/Control/)) {
          this.isCtrl = true;
          if (this.isAlt) {
            this.switchLang();
            this.rename();
          }
          this.resetKeys({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: false });
          this.keyboard.onMark(e);
          return;
        }

        if (e.code.match(/Alt/)) {
          this.isAlt = true;
          if (this.isCtrl) {
            this.switchLang();
            this.rename();
          }
          this.resetKeys({ isAlt: false, isShift: this.isShift, isCtrl: this.isCtrl });
          this.keyboard.onMark(e);
          return;
        }

        if (this.pressKey.getSymbol) {
          this.checkCombs();
          e.preventDefault();
          return;
        }

        this.keyboard.onMark(e);
        this.textArea.node.focus();
      }
    };

    this.node.onkeyup = (e) => {
      if (e.code.match(/Caps/)) {
        return;
      }

      if (e.code.match(/Shift/)) {
        if (this.isShift) {
          this.isShift = !this.isShift;
          this.keyboard.onShift(this.isShift);
        }
      }

      if (e.code.match(/Control/)) {
        this.isCtrl = !this.isCtrl;
      }

      if (e.code.match(/Alt/)) {
        this.isAlt = !this.isAlt;
      }

      this.keyboard.offMark(e);
    };

    this.node.onmousedown = () => {
      this.pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false;

      if (this.pressKey) {
        if (this.pressKey.getSymbol) {

          this.checkCombs();
          return;
        }

        if (this.pressKey.code.match(/Shift/)) {
          this.shift();
          return;
        }

        if (this.pressKey.code.match(/Control/)) {
          this.ctrl();
          return;
        }

        if (this.pressKey.code.match(/Alt/)) {
          this.alt();
          return;
        }

        if (this.pressKey.code.match(/Caps/)) {
          this.caps();
          return;
        }

        if (this.pressKey.code.match(/Backspace/)) {
          this.backspace();
        }

        if (this.pressKey.code.match(/Delete/)) {
          this.delete();
        }

        if (this.pressKey.code.match(/Tab/)) {
          this.tab();
        }

        if (this.pressKey.code.match(/Enter/)) {
          this.enter();
        }

        if (this.pressKey.code.match(/Space/)) {
          this.space();
        }

        if (this.pressKey.code.match(/Arrow/)) {
          this.arrow();
        }

        this.keyboard.onMark(this.pressKey);
        this.resetKeys({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: this.isCtrl });
      }
    };

    this.node.onmouseup = () => {
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
        this.textArea.node.focus();
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
    this.title = new PageElement(container.node, 'h1', 'title');

    if (this.lang === 'en') {
      this.title.node.textContent = 'RSS Virtual Keyboard';
    } else {
      this.title.node.textContent = 'RSS Виртуальная клавиатура';
    }

    this.textArea = new TextArea(container.node, 'textarea');
    this.keyboard = new Keybord(container.node, 'keyboard-wrap', this.lang);

    const subtitle= new PageElement(container.node, 'h4', 'subtitle');
    subtitle.node.textContent = 'OS Linux, switch lang: ctrl+alt or alt+ctrl';


    window.onblur = () => {
      this.resetKeyboard();
    };
  }

  resetKeyboard() {
    this.resetKeys({ isAlt: this.isAlt, isShift: false, isCtrl: this.isCtrl });
    this.keyboard.resetKeyboard();
  }

  resetKeys(needReset) {
    const { isAlt, isShift, isCtrl } = needReset;

    if (isAlt) {
      this.isAlt = !this.isAlt;
      this.keyboard.offMark(this.pressAlt);
    }

    if (isShift) {
      this.isShift = !this.isShift;
      this.keyboard.onShift(this.isShift);
      this.keyboard.offMark(this.pressShift);
    }

    if (isCtrl) {
      this.isCtrl = !this.isCtrl;
      this.keyboard.offMark(this.pressCtrl);
    }
  }

  shift() {
    if (this.isShift) {
      if (this.pressKey === this.pressShift) {
        this.resetKeys({ isAlt: false, isShift: this.isShift, isCtrl: false });
        return;
      }
      this.keyboard.offMark(this.pressShift);
    } else {
      this.isShift = !this.isShift;
      this.keyboard.onShift(this.isShift);
    }

    this.pressShift = this.pressKey;
    this.keyboard.onMark(this.pressKey);
    this.resetKeys({ isAlt: this.isAlt, isShift: false, isCtrl: this.isCtrl });
  }

  ctrl() {
    if (this.isCtrl) {
      if (this.pressKey === this.pressCtrl) {
        this.resetKeys({ isAlt: false, isShift: false, isCtrl: this.isCtrl });
        return;
      }
      this.keyboard.offMark(this.pressCtrl);
    } else {
      this.isCtrl = !this.isCtrl;
    }

    this.pressCtrl = this.pressKey;
    this.keyboard.onMark(this.pressKey);

    if (this.isAlt) {
      this.switchLang();
      this.rename();
      setTimeout(() => {
        this.resetKeys({ isAlt: false, isShift: false, isCtrl: this.isCtrl });
      }, 66);
    }
    this.resetKeys({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: false });
  }

  alt() {
    if (this.isAlt) {
      if (this.pressKey === this.pressAlt) {
        this.resetKeys({ isAlt: this.isAlt, isShift: false, isCtrl: false });
        return;
      }
      this.keyboard.offMark(this.pressAlt);
    } else {
      this.isAlt = !this.isAlt;
    }

    this.pressAlt = this.pressKey;
    this.keyboard.onMark(this.pressKey);

    if (this.isCtrl) {
      this.switchLang();
      this.rename();
      setTimeout(() => {
        this.resetKeys({ isAlt: this.isAlt, isShift: false, isCtrl: false });
      }, 66);
    }

    this.resetKeys({ isAlt: false, isShift: this.isShift, isCtrl: this.isCtrl });
  }

  caps() {
    if (this.isCaps) {
      this.keyboard.offMark(this.pressKey);
    } else {
      this.keyboard.onMark(this.pressKey);
    }

    this.isCaps = !this.isCaps;
    this.keyboard.onCapsLock(this.isCaps);
  }

  checkCombs() {

    if (this.isCtrl) {
      if (this.pressKey.code.match(/KeyA/)) {
        this.textArea.node.focus()
        this.textArea.selectAll();
        this.resetKeys({ isAlt: this.isAlt, isShift: this.isShift, isCtrl: this.isCtrl });
      return;
      }
    } 

    this.symbol()
  }

  symbol() {
    const symbol = this.pressKey.getSymbol();
    this.textArea.printSymbol(symbol);
    this.keyboard.onMark(this.pressKey);
    this.resetKeys({ isAlt: this.isAlt, isShift: false, isCtrl: this.isCtrl });
  }

  backspace() {
    this.textArea.backspace();
  }

  delete() {
    this.textArea.delete();
  }

  tab() {
    this.textArea.tab();
  }

  space() {
    this.textArea.space();
  }

  enter() {
    this.textArea.enter();
  }

  arrow() {
    if (this.pressKey.code.match(/Right/)) {
      if (this.isShift) {
        this.textArea.select();
      } else {
        this.textArea.arrowRight('right');
      }
      return;
    }

    if (this.pressKey.code.match(/Left/)) {
      if (this.isShift) {
        this.textArea.select();
      } else {
        this.textArea.arrowRight('right');
      }
      return;
    }

    if (this.pressKey.code.match(/Up/)) {
      this.textArea.arrowUp();
      return;
    }

    if (this.pressKey.code.match(/Down/)) {
      this.textArea.arrowDown();
      return;
    }
  }

  switchLang() {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }

    localStorage.setItem('lang', this.lang);
    this.keyboard.switchLang(this.lang)
  }

  rename() {
    console.log('aa')
    if (this.lang === 'en') {
      this.title.node.textContent = 'RSS Virtual Keyboard';
    } else {
      this.title.node.textContent = 'RSS Виртуальная клавиатура';
    }
  }
}
