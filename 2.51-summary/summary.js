/*

goal: review linkedlist, stack, queue data structures 

*/
class listNode {
    constructor(value) { this.value = value; this.next = null }
}
class linkedList {
    constructor() { this.head = null; this.tail = null }

    append(value){
        let node = new listNode(value)

        if (this.head) { this.tail.next = node; this.tail = node }
        if (!this.head) { this.head = node; this.tail = node }   

        return this
    }

    size () {
        let size = 0; let pointer = this.head

        while (pointer) { pointer = pointer.next; size++ }
        return size
    }
}

let list = new linkedList()
for (let value of ["a", "b", "c", "d", "e"]) list.append(value)

// console.log(list.size())

/* 

Queue

*/

class Queue {
    constructor() { this.elements = {}; this.head = 0; this.tail = 0 }

    enqueue(value) { this.elements[this.tail] = value; this.tail++ }

    dequeue() { 
        const element = this.elements[this.head]
        delete this.elements[this.head]
        this.head++ 
        return element
    }

}

let q = new Queue()

for (let i = 1; i < 8; i++) q.enqueue(i) 
console.log(q)

