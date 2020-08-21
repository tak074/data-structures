var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a newNode through Node
    var newNode = new Node(value);

    // if empty
    if (!list.tail) {
      // this.head = newNode;
      this.head = newNode;
      // this.tail = newNode;
      this.tail = newNode;

    } else {
      //if not empty
      var currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      //currentHead = this.head;
      var currentHead = this.head;
      //newHead = currentHead.next;
      var newHead = currentHead.next;
      // delete currentHead;
      this.head = newHead;
      return currentHead.value;
    } else {
      return this;
    }
  };

  list.contains = function(target) {
    // create truthyVal = false;
    var truthyVal = false;
    //currentNode = this.head;
    var currentNode = this.head;
    while (!truthyVal && currentNode !== null) {
      if (currentNode.value === target) {
        truthyVal = true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return truthyVal;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail has a O(1)
 removeHead has a O(1)
 contains has a O(n)
 */
