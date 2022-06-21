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

        while (node != search.data){
            search = search.next
        }
        let searchNext = search.next
    
        console.log(search)
        console.log("~~~~~~~~")
        console.log(searchNext)

    }
}

let list = new linkedList()

for (let data of ["a", "b", "c", "d", "e"]){
    list.append(data)
}

list.remove("c")


/* remove middle node c */


/*

what does it mean to have access only to that node?

current remove method will 
-assign search to the node we are given
-once found it will assign the .next value to var searchNext

need to 
- find a way to keep track of previous nodes 
- this way I can link the .next to the previous node before the one to be removed


*/

