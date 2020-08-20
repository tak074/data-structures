var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create using Object.create
  var someInstance = Object.create(stackMethods);
  // create index property
  someInstance.index = 0;
  // return new object
  return someInstance;
};

// Object.create();

var stackMethods = {
  pop: function() {
    if (this.index === 0) {
      return this;
    } else {
      var poppedElement = this[this.index];
      delete this[this.index];
      this.index--;
      return poppedElement;
    }
  },
  push: function(value) {
    this[this.index + 1] = value;
    this.index++;
  },

  size: function() {
    return this.index;
  }
};



