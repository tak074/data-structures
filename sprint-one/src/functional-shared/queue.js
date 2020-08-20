var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create an empty obj
  var someInstance = {};

  someInstance.storage = {};
  // property of someInstane
  someInstance['lastIndex'] = 0;

  // extend to connect someInstance to queueMethods
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  // enqueue method
  enqueue: function (value) {
    // someInstance[lastIndex + 1] = value
    this.storage[this.lastIndex + 1] = value;
    // lastIndex++
    this.lastIndex++;
  },
  dequeue: function () {
    if (this.lastIndex !== 0) {
      var dqVal = this.storage['1'];
      delete this.storage['1'];
      this.lastIndex--;
      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      return dqVal;
    } else {
      return this.storage;
    }
  },
  size: function () {
    return this.lastIndex;
  }

};

