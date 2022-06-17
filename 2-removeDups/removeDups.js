/*

Write code to remove duplicates from an unsorted linked list

*/

class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        let node = new Node(value)

        if (this.head){
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }
}