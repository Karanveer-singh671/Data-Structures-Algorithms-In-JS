class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }
  addVertex(node){
    this.adjacentList[node] = []
     this.numberOfNodes++
  }
  addEdge(node1,node2){
    // undirected Graph
  }
  showConnections(){}
}