var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance['' + (counter)] = value;
    counter++;

    return someInstance;

  };

  someInstance.pop = function() {
    var popElement = someInstance['' + (counter - 1)];
    if (counter !== 0) {
      delete someInstance['' + counter];
      counter--;
      return popElement;
    }
    return popElement;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};


