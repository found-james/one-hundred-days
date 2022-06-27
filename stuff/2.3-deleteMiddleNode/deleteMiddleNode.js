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
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }

    size(){
        let size = 0
        let node = this.head

        while (node){
            node = node.next
            size++
        }

        return size
    }

    remove(node){

        let search = this.head
        let prev = this.head


        while (node != search.data){
            prev = search
            search = search.next
        }

        let searchNext = search.next
        prev.next = searchNext
    }
}

let list = new linkedList()

for (let data of ["a", "b", "c", "d", "e"]){
    list.append(data)
}

console.log(list.size())
list.remove("c")
console.log(list.size())


/* remove middle node c */


/*

what does it mean to have access only to that node?

Incomplete solution 
must deal with cae where head or tail is the node to be removed


*/

