class Node {
    constructor(value) {
        this.value = value;
        this.adjacencyList = [];
    }
    connect(node) {
        this.adjacencyList.push(node);
        // node.adjacencyList.push(this); // COMMENT FOR DAG 
    }
    getadjacencyList() {
        return this.adjacencyList;
    }
    isConnected(node) {
        return !!this.adjacencyList.find(edge => edge.value === node.value);
    }
}
export default Node;
// module.exports = Node; // use for Nodejs


