import Key from './common/key';

export default class FuncionKey extends Key {
  constructor(parent, code, defaultValue) {
    super(parent, 'key', code);
    this.node.textContent = defaultValue;
    this.node.className = `${this.node.className} key_${defaultValue.toLowerCase()}`;
  }
}
