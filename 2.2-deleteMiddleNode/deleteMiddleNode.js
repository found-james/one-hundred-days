/*

Implement an algorithm to delete a node in the middle of a singly linked list, given access only to that node

*/

class listNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){
        let node = new listNode(data)

        if (this.head){
            this.head.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }

    }
}
/*

what does it mean to have access only to that node?

*/

