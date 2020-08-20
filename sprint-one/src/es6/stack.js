class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  pop() {
    if (this.index !== 0) {
      var poppedElement = this[this.index];
      delete this[this.index];
      this.index --;
      return poppedElement;
    } else {
      return this;
    }
  }

  push(value) {
    this[this.index + 1] = value;
    this.index++;
  }

  size() {
    return this.index;
  }

}