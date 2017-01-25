'use strict';

const Queue = require('./singly-linked-list.js');

module.exports = Queue;

Queue.prototype.enqueue = function(val) {
  // let node = new Node(val);
  this.append(val);
  // node.next = null;
  // this.tail = node;
  // return node.val;
};

Queue.prototype.dequeue = function() {
  if (this.head) {
    let prev = this.head;
    let cur = this.head.next;
    this.head = cur;
    return prev.val;
  }
  return null;
};
