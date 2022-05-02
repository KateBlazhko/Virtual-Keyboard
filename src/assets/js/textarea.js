import PageElement from './common/pageElement';

export default class TextArea extends PageElement {
  constructor(parent, className) {
    super(parent, 'textarea', className);

    this.node.value = '';
  }

  getCursorData() {
    const cursorStart = this.node.selectionStart;
    const cursorEnd = this.node.selectionEnd;
    const beforeCursor = this.node.value.slice(0, cursorStart);
    const afterCursor = this.node.value.slice(cursorEnd);
    return { cursorStart, cursorEnd, beforeCursor, afterCursor };
  }

  printSymbol(symbol) {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = beforeCursor + symbol + afterCursor;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  backspace() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    if (cursorStart > 0) {
      this.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
      cursorStart -= 1;
      this.node.setSelectionRange(cursorStart, cursorStart);
    }
  }

  delete() {
    const { cursorStart, beforeCursor, afterCursor } = this.getCursorData();

    this.node.value = beforeCursor + afterCursor.slice(1);
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  tab() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = `${beforeCursor}\t${afterCursor}`;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  space() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = `${beforeCursor} ${afterCursor}`;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  enter() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = `${beforeCursor}\n${afterCursor}`;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  arrowRight() {
    let { cursorStart } = this.getCursorData();

    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  arrowLeft() {
    let { cursorStart } = this.getCursorData();

    cursorStart -= 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  arrowUp() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = `${beforeCursor}↑${afterCursor}`;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  arrowDown() {
    const { beforeCursor, afterCursor } = this.getCursorData();
    let { cursorStart } = this.getCursorData();

    this.node.value = `${beforeCursor}↓${afterCursor}`;
    cursorStart += 1;
    this.node.setSelectionRange(cursorStart, cursorStart);
  }

  select(isRightDirection) {
    let { cursorStart, cursorEnd } = this.getCursorData();

    if (cursorEnd === cursorStart) {
      this.selectDirection = isRightDirection
    }

    if (this.selectDirection === isRightDirection) {
      if (isRightDirection) {
        cursorEnd += 1;
        this.node.setSelectionRange(cursorStart, cursorEnd);
      } else {
        console.log(cursorStart, 'start')
        if (cursorStart > 0) {
          cursorStart -= 1;
          this.node.setSelectionRange(cursorStart, cursorEnd);
        }
      }
    } else {
      if (cursorEnd > cursorStart) {
        if (isRightDirection) {
          cursorStart += 1;
          this.node.setSelectionRange(cursorStart, cursorEnd);
        } else {
          cursorEnd -= 1;
          this.node.setSelectionRange(cursorStart, cursorEnd);
        }
      }

    }
  }

  selectAll() {
    const { value } = this.node;
    this.node.select()
  }

  // copy() {
  //   let { cursorStart, cursorEnd } = this.getCursorData();

  //   if (cursorStart === cursorEnd) {
  //     return null
  //   } 

  //   const { value } = this.node;
  //   console.log(cursorStart)

  //   console.log(cursorEnd)
  //   return value.slice(cursorStart, cursorEnd)
  // }
}
