import PageElement from './pageElement';

export default class Key extends PageElement {
  constructor(parent, className, code) {
    super(parent, 'div', className);

    this.code = code;
    this.onKey = () => {};

    this.node.onmousedown = () => {
      this.onKey();
    };
  }
}
