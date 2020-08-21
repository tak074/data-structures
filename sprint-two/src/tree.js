var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  var mother = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var truthyVal = false;
  var currentNode = this;

  var innerFunc = function(currentNode) {
    if (currentNode.value === target) {
      truthyVal = true;
    } else {
      if (currentNode.children) {
        for (var i = 0; i < currentNode.children.length; i++) {
          innerFunc(currentNode.children[i]);
        }
      }
    }
  };

  innerFunc(currentNode);
  return truthyVal;
};

