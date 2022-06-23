/*

goal: review linkedlist, stack, queue data structures 

*/
class listNode {
    constructor(value){ this.value = value; this.next = null }
}
class linkedList {
    constructor(){ this.head = null; this.tail = null }

    append(value){
        let node = new listNode(value)

        if (this.head){ this.tail.next = node; this.tail = node }
        if (!this.head){ this.head = node; this.tail = node}   

        return console.log(this)
    }

    size () {
        let size = 0; let pointer = this.head

        while (pointer){ pointer = pointer.next; size++ }
        return size
    }
}

let list = new linkedList()
for (let value of ["a", "b", "c", "d", "e"]) list.append(value)



console.log(list.size())
