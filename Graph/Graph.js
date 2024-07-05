class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }
    addToGraph(node) {
        this.nodes.push(node);
    }
    breadthFirstTraversal(start, end ='') {
        const queue = [start];
        const visiteNode = new Set();
        visiteNode.add(queue);
        while(queue.length > 0) {
            const node = queue.shift();
            if(end && node.value === end.value) {
                console.log('found');
                return;
            }
            console.log(node);
            for(let adjacency of node.adjacencyList) {
                if(!visiteNode.has(adjacency)) {
                    queue.push(adjacency);
                    visiteNode.add(adjacency);
                }
            }
        }
    }
    reconstruct(visitedNode, start, end) {
        let currentNode = end;
        const pathArr = [];
        while(currentNode !== null) {
            pathArr.push(currentNode.value);
            currentNode = visitedNode[currentNode.value];
        }
        return pathArr.reverse();
    }

    breadthFirstTraversalPath(start, end) {
        const queue = [start];
        const visitedNode = {}; // track of the path
        visitedNode[start.value]= null;
        while(queue.length > 0) {
            const node = queue.shift();
            if(node.value === end.value) {
                console.log('Found it');
                return this.reconstruct(visitedNode, start, end);
            }
            for(let adjacency of node.adjacencyList) {
                //add it's neighbour to the queue
                // track the nodes we are adding
                if(!visitedNode.hasOwnProperty(adjacency.value)) {
                    queue.push(adjacency);
                    visitedNode[adjacency.value] = node;
                    console.log(adjacency.value);
                }
            }
        }

    }

    depthFirstTraversal(start,end, visitedNode) {
        if(!visitedNode) {
            visitedNode = new Set();
        }
        // base case
        if(start.value === end.value) {
            console.log('Found it');
            return;
        }
        visitedNode.add(start);
        for(let adjacency of start.adjacencyList) {
            if(!visitedNode.has(adjacency)) {
                visitedNode.add(adjacency);
                this.depthFirstTraversal(adjacency, end, visitedNode);
                console.log(adjacency);
            }
        }
    }
    topologicalSort() {
        const visitedNode = new Set();
        const topOrdering = [];
        for(let  adjacency of this.nodes) {
            this.depthFirstTraversalTopological(adjacency, visitedNode, topOrdering);
        }
        return topOrdering.reverse();
    }
    depthFirstTraversalTopological(start, visited, topOrdering) {
        if(visited.has(start)) return;
        visited.add(start);
        for(let item of start.adjacencyList) {
            this.depthFirstTraversalTopological(item, visited, topOrdering);
        }
        // about to pop start from stack
        topOrdering.push(start.value);
    }
}
export default Graph;
// module.exports = Graph; // use this for nodeJs
