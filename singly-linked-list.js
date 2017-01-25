'use strict';

module.exports = SinglyLinkedList;

// ----- CLASS DEMO CODE FROM LAB 24 ----- //

function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(arr) {
  this.head = null;

  if (Array.isArray(arr)) {
    arr.forEach( val => {
      return this.prepend(val);
    });
  }
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

// // ----- MEGAN AND PETER WHITEBOARD CODE FROM LAB 26 ----- //
//
// SinglyLinkedList.prototype.enqueue = function(val) {
//   let node = new Node(val);
//   this.append(val);
//   node.next = null;
//   this.tail = node;
//   return node.val;
// };
//
// SinglyLinkedList.prototype.dequeue = function() {
//   if (this.head) {
//     let prev = this.head;
//     let cur = this.head.next;
//     this.head = cur;
//     return prev.val;
//   }
//   return null;
// };
//
// // ----- MEGAN, PETER AND EVAN WHITEBOARD CODE FROM LAB 27 ----- //
//
// SinglyLinkedList.prototype.treeQueuer = function() {
//   let q = new SinglyLinkedList();
//   q.enqueue(this);
//   while(q.sll.head) {
//     let cur = q.dequeue();
//     console.log(cur.val);
//     cur.childern.forEach(function(child) {
//       q.enqueue(child);
//     });
//   }
// };
