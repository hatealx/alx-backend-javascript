export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size attrib
  get size() {
    return this._size;
  }

  // Getter for location attribute
  get location() {
    return this._location;
  }

  // Define the valueOf method to cast to a Number
  valueOf() {
    return this.size;
  }

  // Define the toString method to cast to a String
  toString() {
    return this.location;
  }
}
