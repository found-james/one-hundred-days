class Node {
    constructor (value){
        this.value = value
        this.adjacents = []
    }

    addAdjacent(node){
        this.adjacents.push(node)
    }

    removeAdjacent(node){
        const idx = this.adjacents.indexOf(node)
        
        if (idx > -1) {
            this.adjacents.splice(idx, 1)
            return node
        }
    }
}

class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map ()
        this.edgeDirection = edgeDirection
    }

    addVertex(key){
        if (this.nodes.has(key)) {
            return this.nodes.get(key)
        } else {
            const vertex = new Node(key)
            this.nodes.set(key, vertex)
            return vertex
        }
    }

    addEdge (nodeX, nodeY){
        const sourceNode = this.addVertex(nodeX)
        const destinationNode = this.addVertex(nodeY)

        sourceNode.addAdjacent(destinationNode)

        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode)
        }

        return [sourceNode, destinationNode]
    }

}

Graph.UNDIRECTED = Symbol ("directed graph")
Graph.DIRECTED = Symbol ("undirected graph")

const firstGraph = new Graph()

firstGraph.addEdge("a", "b")
firstGraph.addEdge("b", "c")
firstGraph.addEdge("c", "a")


console.log(firstGraph.nodes)