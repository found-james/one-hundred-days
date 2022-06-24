class NodeGraph {
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

