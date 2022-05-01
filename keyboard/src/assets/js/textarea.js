import PageElement from './common/pageElement';

export default class TextArea extends PageElement {
  constructor(parent, className) {
    super(parent, 'textarea', className);

    this.node.value = '';
  }

  getCursorPosition() {
    const cursorPosition = this.node.selectionStart;
    const beforeCursor = this.node.value.slice(0, cursorPosition);
    const afterCursor = this.node.value.slice(cursorPosition);
    return { cursorPosition, beforeCursor, afterCursor };
  }

  printSymbol(symbol) {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.node.value = beforeCursor + symbol + afterCursor;
    cursorPosition += 1;
    this.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  backspace() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    if (cursorPosition > 0) {
      this.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
      cursorPosition -= 1;
      this.node.setSelectionRange(cursorPosition, cursorPosition);
    }
  }

  delete() {
    const { cursorPosition, beforeCursor, afterCursor } = this.getCursorPosition();

    this.node.value = beforeCursor + afterCursor.slice(1);
    this.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  tab() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.node.value = `${beforeCursor}\t${afterCursor}`;
    cursorPosition += 1;
    this.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  space() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.node.value = `${beforeCursor} ${afterCursor}`;
    cursorPosition += 1;
    this.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  enter() {
    const { beforeCursor, afterCursor } = this.getCursorPosition();
    let { cursorPosition } = this.getCursorPosition();

    this.node.value = `${beforeCursor}\n${afterCursor}`;
    cursorPosition += 1;
    this.node.setSelectionRange(cursorPosition, cursorPosition);
  }
}
