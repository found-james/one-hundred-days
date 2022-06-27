class Queue {
    constructor (){
        this.elements = {}
        this.head = 0
        this.tail = 0
    }

    add (value) {
        this.elements[this.tail] = value
        this.tail++
    }

    remove () {
        const element = this.elements[this.head]
        delete this.elements[this.head]
        this.head++
        return element
    }

    isEmpty(){
        return !(this.tail - this.head)
    }
}
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

// const firstGraph = new Graph()

// firstGraph.addEdge("a", "b")
// firstGraph.addEdge("b", "c")
// firstGraph.addEdge("c", "a")


// console.log(firstGraph.nodes)

const testQ = new Queue ()
testQ.add("a")
console.log(testQ)
console.log(testQ.isEmpty())