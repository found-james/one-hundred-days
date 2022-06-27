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

    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++;
            node = node.next
        }
        return count
    }
    
}

function findKthToLast (k, list) {

    let size = list.size()

    if (k > size) throw new Error ("k is bigger than linkedList")
    
    let node = list.head
    let kthToLast = size - k 
    let count = 0

    while (count < kthToLast){
        node = node.next
        count++
    }

    return node
}

let l = new linkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)

console.log(findKthToLast(4, l))