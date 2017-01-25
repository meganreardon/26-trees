'use strict';

const Tree = require('./tree.js');

let t = new Tree('A');

// console.log('new tree is:', t);
// console.log('new tree val is', t.val);
// console.log('new tree children is', t.children);

// t.children.push(new Tree('B'));

t.children.push(new Tree('B'), new Tree('C'));

t.children[0].children.push(new Tree('D'), new Tree('E'));
t.children[1].children.push(new Tree('F'), new Tree('G'));

// t.treeQueuer();

// console.log(`Actual value was ${t.treeQueuer()}`);

console.assert(t.treeQueuer() == 'A,B,C,D,E,F,G');
console.log('Test is passing! Yays!');









// console.log('new tree is:', t);
// console.log('new tree val is', t.val);
// console.log('new tree children is', t.children);
// console.log('new tree children of children:', t.children[1].children.length);
// console.log('new tree children of children:', t.children[2].children);

// console.assert(t.treeQueuer() == 'A,B,C,D,E,F,G', `actual value was ${t.treeQueuer()}`);



// --- text example taken from stephen --- //

// const Tree = require('./tree.js');

// var testTree = new Tree('A');
// var b = new Tree('B');
// var c = new Tree('c');
// var d = new Tree('d');
// var e = new Tree('e');
//
// testTree.children.push(b);
// testTree.children.push(c);
// testTree.children.push(e);
// testTree.children.push(d);
//
// console.assert(testTree.breadthFirst() == 'A,B,c,e,d', `Actual value was ${testTree.breadthFirst()}`);
// console.log('Tests passing.');
