export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.code} (${this.name})`;
  }
}
