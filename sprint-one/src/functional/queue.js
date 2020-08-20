var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance['' + (counter)] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var popElement = someInstance[0];
    if (counter === 0) {
      return someInstance;
    } else {
      delete someInstance[0];
      for (key in someInstance) {
        someInstance['' + (key - 1)] = someInstance['' + key];
      }
      counter--;
      return popElement;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
