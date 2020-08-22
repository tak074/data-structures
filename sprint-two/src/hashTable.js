
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var room = this._storage.get(index);
  if (!!room) {
    //check if that k already exists

    if (this.retrieve(k)) {
      for (var j = 0; j < room.length; j++) {
        if (room[j][0] === k) {
          room[j][1] = v;
        }
      }
    } else {
      room.push([k, v]);
      this.count++;
      // //possibly double
      // if (this.count > this.limit * 0.75) {
      //   this._resize(this._limit * 2);
      // }
    }
  } else {
    var tuple = [k, v];
    this._storage.set(index, [tuple]);
    this.count++;
    // //possibly double
    // if (this.count > this.limit * 0.75) {
    //   this._resize(this._limit * 2);
    // }
  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // go to the index
  if (this.count === 0) {
    return undefined;
  } else {
    var room = this._storage.get(index);
    for (var i = 0; i < room.length; i++) {
      var tuple = room[i];
      // if its tuple[0] === k
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go to the index of the storage
  var room = this._storage.get(index);

  if (this.count === 0) {
    return undefined;
  } else {
    var room = this._storage.get(index);
    for (var i = 0; i < room.length; i++) {
      var tuple = room[i];
      // if its tuple[0] === k
      if (tuple[0] === k) {
        room.splice(i, 1);
        this.count--;
        // //possibly double
        // if (this.count < this.limit * 0.25) {
        //   this._resize(this._limit / 2);
        // }
      }
    }
  }

  //possibly half
  if (this.count <= this.limit * 0.25) {
    this.limit = this.limit / 2;
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)

 retrieve: O(1)

 remove: O(1)

 */

