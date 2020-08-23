var BinarySearchTree = function(value) {
  var searchTree = Object.create(searchMethod);

  searchTree.mother = null;
  searchTree.rightChild = null;
  searchTree.leftChild = null;
  searchTree.children = [];
  searchTree.value = value;
  searchTree.left = [];
  searchTree.right = [];

  return searchTree;
};

var searchMethod = {};

searchMethod.insert = function(value) {
  // create newNode unbound
  var newNode = BinarySearchTree(value);
  //if it's the first, make it root.

  //compare value to the this.value.
  var searching = true;
  var context = this;

  var iterateNodes = function (newNode, currentNode) {
    while (searching) {
      // if val === this.value
      // return 'IT\'S A TRAP';

      //if node.value > this.value
      if (newNode.value > currentNode.value) {
        //add newNode into the this.right
        currentNode.right.push(newNode.value);
        //add this into newNode.left
        newNode.left.push(currentNode.value);

        // if this.rightChild exists
        if (currentNode.rightChild) {
          //repeat
          iterateNodes(newNode, currentNode.rightChild);
        } else {
          //if no this.rightChild
          //add node as this.rightChild
          currentNode.rightChild = newNode;
          currentNode.children.push(newNode);
          //add this as the node.mother
          newNode.mother = currentNode;
          searching = false;
        }
      }

      // if node.value < this.value
      if (newNode.value < currentNode.value) {
        //add node into the this.left
        currentNode.left.push(newNode.value);
        //add this into node.right
        newNode.right.push(currentNode.value);

        // if this.leftChild exists
        if (currentNode.leftChild) {
          //leftChild.prototype.insert
          iterateNodes(newNode, currentNode.leftChild);
        } else {
          //if no this.leftChild
          //add node as its leftChild
          currentNode.leftChild = newNode;
          currentNode.children.push(newNode);
          //add this as the new node's mother.

          newNode.mother = currentNode;
          searching = false;
        }

      }
    }
  };

  iterateNodes(newNode, context);

};

searchMethod.contains = function(value) {
  var context = this;
  var contained = false;
  var iterateNodes = function (currNode) {
    if (currNode.value === value) {
      contained = true;
      return true;
    }

    if (currNode.children) {
      if (currNode.value > value) {
        if (currNode.leftChild) {
          iterateNodes(currNode.leftChild);
        }
      } else {
        if (currNode.rightChild) {
          iterateNodes(currNode.rightChild);
        }
      }
    }
    return contained;
  };

  return iterateNodes(context);
};

searchMethod.depthFirstLog = function(cb) {
  var context = this;

  var iterateNodes = function (currNode) {
    cb(currNode.value);

    if (currNode.children) {
      for (var j = 0; j < currNode.children.length; j++) {
        iterateNodes(currNode.children[j]);
      }
    }
  };

  iterateNodes(context);
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O (log n)
 contains: O (log n)
 depthFirstLog: O (n)
 */
