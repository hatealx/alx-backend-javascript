export default class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : '';
    this._name = typeof name === 'string' ? name : '';
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
