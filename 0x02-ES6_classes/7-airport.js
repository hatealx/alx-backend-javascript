export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Override the default toString method
  toString() {
    return `[object ${this.code}]`;
  }
}
