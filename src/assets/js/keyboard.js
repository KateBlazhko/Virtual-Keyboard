import PageElement from './common/pageElement';
import keysData from '../json/keyData.json';
import FuncionKey from './functionKey';
import SymbolKey from './symbolKey';

export default class Keybord extends PageElement {
  constructor(parent, className, lang) {
    super(parent, 'div', className);
    const keyboard = new PageElement(this.node, 'div', 'keyboard');
    this.rows = [
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
      new PageElement(keyboard.node, 'div', 'keyboard__row'),
    ];
    this.lang = lang;
    this.renderKeyboard();
  }

  renderKeyboard() {
    this.keyList = [];

    keysData.forEach((row, i) => {
      row.forEach((key) => {
        if (key.type === 'Symbol') {
          this.keyList.push(new SymbolKey(
            this.rows[i].node,
            key.code,
            key.default,
            key.shift,
            this.lang,
          ));
        } else {
          this.keyList.push(new FuncionKey(
            this.rows[i].node,
            key.code,
            key.default,
          ));
        }
      });
    });
    this.onKeys();
  }

  onKeys() {
    this.keyList.forEach((item) => {
      const key = item;
      key.onKey = () => {
        this.pressKey = key;
        this.isPress = true;
      };
    });
  }

  setPressKey(e) {
    this.pressKey = this.keyList.find((key) => key.code === e.code);
    this.isPress = true;
  }

  getPressKey() {
    return this.isPress ? this.pressKey : null;
  }

  onCapsLock(isCaps) {
    this.keyList.forEach((key) => {
      if (key.caps) {
        key.caps(isCaps);
      }
    });
  }

  onShift(isShift) {
    this.keyList.forEach((key) => {
      if (key.shift) {
        key.shift(isShift);
      }
    });
  }

  onMark(e) {
    if (e) {
      this.markKey = this.keyList.find((key) => key.code === e.code) || null;
      if (this.markKey) {
        this.markKey.node.classList.toggle('mark');
      }
    }
  }

  offMark(e) {
    if (e) {
      this.markKey = this.keyList.find((key) => key.code === e.code) || null;
      if (this.markKey) {
        this.markKey.node.classList.remove('mark');
      }
    }
  }

  switchLang(lang) {
    this.keyList.forEach((key) => {
      if (key.switchLang) {
        key.switchLang(lang);
      }
    });
  }

  resetKeyboard() {
    this.keyList.forEach((key) => {
      if (!key.code.match(/Caps/)) {
        this.offMark(key);
      }
    });
  }
}
