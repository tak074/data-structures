var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lastIndex = 0;
};


Stack.prototype.pop = function () {
  if (this.lastIndex !== 0) {
    var poppedElement = this[this.lastIndex];
    delete this[this.lastIndex];
    this.lastIndex--;
    return poppedElement;
  } else {
    return this;
  }
};

Stack.prototype.push = function (value) {
  this[this.lastIndex + 1] = value;
  this.lastIndex++;
};

Stack.prototype.size = function() {
  return this.lastIndex;
};