export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
