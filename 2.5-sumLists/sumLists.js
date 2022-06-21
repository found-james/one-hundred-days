/* 

There two numbers represented by linkedLists
Each node conatins a single digit
The digits of the number are stored in reverse order (head contains the ones)

Wrtie function that adds the two numbbers and returns the sum as a linkedList

*/


class listNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor (){
        this.head = null
        this.tail = null
    }

    append (node){
        if (this.head){
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }

}

