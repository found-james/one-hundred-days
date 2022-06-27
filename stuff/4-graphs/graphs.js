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

    getAdjacents() {
        return this.adjacents
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

    *bfs(first) {
        const visited = new Map ()
        const visitList = new Queue ()
    
        visitList.add(first)
    
        while (!visitList.isEmpty()){
            const node = visitList.remove()
            if (node && !visited.has(node)){
                yield node
                visited.set(node)
                node.getAdjacents().forEach( adj => visitList.add(adj))
            }
        }
    }

}

Graph.UNDIRECTED = Symbol ("directed graph")
Graph.DIRECTED = Symbol ("undirected graph")

const firstGraph = new Graph()

const [first] = firstGraph.addEdge("a", "b")

firstGraph.addEdge("b", "c")
firstGraph.addEdge("c", "a")

bfsFromFirst = firstGraph.bfs(first)

console.log(bfsFromFirst.next().value.value)
console.log(bfsFromFirst.next().value.value)
console.log(bfsFromFirst.next().value.value)

// console.log(firstGraph.nodes)

