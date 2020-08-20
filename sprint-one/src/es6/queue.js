class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  enqueue(value) {
    this[this.index + 1] = value;
    this.index++;
  }

  dequeue() {
    if (this.index !== 0) {
      var dqVal = this[1];
      delete this[1];
      for (var key in this) {
        this[key - 1] = this[key];
      }
      this.index--;
      return dqVal;
    } else {
      return this;
    }
  }

  size() {
    return this.index;
  }

}
