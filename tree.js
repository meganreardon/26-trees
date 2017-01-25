'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
}

var treeArray = [];

Tree.prototype.treeQueuer = function() {
  let q = new Queue();
  q.enqueue(this);
  while(q.head) {
    let cur = q.dequeue();
    // console.log(cur.val);
    treeArray.push(cur.val);
    // console.log('treeArray is', treeArray);
    cur.children.forEach(function(child) {
      q.enqueue(child);
    });
  }
  console.log('tree array is', treeArray);
  return treeArray;
};
