'use strict';

const Tree = require('./tree.js');

let t = new Tree('A');
t.children.push(new Tree('B'), new Tree('C'));
t.children[0].children.push(new Tree('D'), new Tree('E'));
t.children[1].children.push(new Tree('F'), new Tree('G'));

console.assert(t.treeQueuer() == 'A,B,C,D,E,F,G');
console.log('Test is passing! Yays!');
