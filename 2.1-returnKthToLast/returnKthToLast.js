/*

Implement an algorithm to find the kth to last element of a singly linkedlist

*/

class listNode {
    constructor (data){
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor (){
        this.head = null
        this.tail = null
    }

    append (data){
        let node = new listNode(data)

        if (this.head){
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }
}