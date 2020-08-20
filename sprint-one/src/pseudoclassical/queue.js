var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  // add the value to the end
  this[this.lastIndex + 1] = value;
  // increment
  this.lastIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.lastIndex !== 0) {
    var dqVal = this[1];
    delete this[1];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    this.lastIndex--;
    return dqVal;
  } else {
    return this;
  }
};

Queue.prototype.size = function() {
  return this.lastIndex;
};

