// const Node = require('./Node.js');
// const Graph = require('./Graph.js'); // use require for node

import Node from './Node.js';
import Graph from'./Graph.js';

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
// const G = new Node('G');

const Graph1 = new Graph([A,B,C,D,E,F]);

// A.connect(B);
// A.connect(C);
// B.connect(C);
// B.connect(D);
// B.connect(G);
// C.connect(F);
// D.connect(E);
// D.connect(G);
// C.connect(D);
// D.connect(F);
// F.connect(G);

// Graph1.breadthFirstTraversal(A);
// Graph1.breadthFirstTraversal(A, F);
// console.log(Graph1.breadthFirstTraversalPath(A, G));
// console.log(Graph1.depthFirstTraversal(A, F));


A.connect(B);
A.connect(C);
B.connect(D);
D.connect(F);
E.connect(F);
E.connect(C);
console.log(Graph1.topologicalSort());