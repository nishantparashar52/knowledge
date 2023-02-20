const vertices = ['A','B','C','D','E','F'];

const edges = [
    ['A', 'B'],
    ['A', 'D'],   
    ['B', 'C'],
    ['C', 'E'],
    ['C', 'D'],   
    ['D', 'E'],
]

const nodeIdx = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5
}

const adjacencyMatrix = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0]
]

function findAdjacencyNode(node) {
    const adjacencyNodes = [];
    let adjacencyNode = null;
    for(let list of edges) {
        const nodeX = list.indexOf(node);
        if(nodeX > -1) {
            adjacencyNode = nodeX === 0 ? list[1] : list[0];
            adjacencyNodes.push(adjacencyNode);
        }
    }
    return adjacencyNodes;
}

function isConnected(start, end) {
    return !!(edges.some(edge => edge.indexOf(start) > -1 && edge.indexOf(end) > -1));
}

function findAdjacencyMatrix(node) {
    const adjecentNode = [];
    // const adjacencyMatrix = [...Array.from(vertices).fill().map(() => Array.from(vertices).fill(0))];
    for(let i = 0; i< vertices.length;i++) {
        const nodeIndex = nodeIdx[node];
        if(adjacencyMatrix[nodeIndex][i] === 1) {
            adjecentNode.push(vertices[i]);
        }
    }
    return adjecentNode;
}

function isConnectedAdjacencyList(node1, node2) {
    return !!adjacencyMatrix[nodeIdx[node1]][nodeIdx[node2]];
}

findAdjacencyNode('D');
console.log(isConnected('A', 'D'));
console.log(findAdjacencyMatrix('B'));
console.log(isConnectedAdjacencyList('A', 'E'))