var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create someInstance obj
  var someInstance = {};
  // create size prop equal 0
  someInstance.lastIndex = 0;
  // pass methods to instance by using extend
  _.extend(someInstance, stackMethods);

  return someInstance;
};


var stackMethods = {
  // create pop method using this keyword
  pop: function() {
    if (this.lastIndex !== 0) {
      var poppedItem = this[this.lastIndex];
      delete this[this.lastIndex];
      this.lastIndex--;
      return poppedItem;
    } else {
      return this;
    }
  },
  // create push methods using this keywords
  push: function(value) {
    this[this.lastIndex + 1] = value;
    this.lastIndex++;
  },
  // create size method using this
  size: function () {
    return this.lastIndex;
  }
};


