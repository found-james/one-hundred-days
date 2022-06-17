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
        let node = new ListNode(value)

        if (this.head){
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }
}

let list = new LinkedList();
console.log(list)

for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  console.log(list, ' @ iteration')
  list.append(elem);
}

console.log(list)
