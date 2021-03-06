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

    append (value){
        let node = new listNode(value)
        if (this.head){
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }
}

const listOne = new linkedList()

for (let num of [7, 1, 6]){
    listOne.append(num)
}

const listTwo = new linkedList()

for (let num of [5, 9, 2]){
    listTwo.append(num)
}

function sumOfLinkedLists (listOne, listTwo){

    let pointer = listOne.head
    const firstNum = []

    while (pointer) {
        firstNum.push(pointer.value)
        pointer = pointer.next
    }

    pointer = listTwo.head
    const secondNum =[]

    while (pointer) {
        secondNum.push(pointer.value)
        pointer = pointer.next
    }

    let addend = parseInt(firstNum.reverse().join("")) 
    let otherAddend = parseInt(secondNum.reverse().join(""))
    let sum = addend + otherAddend
    const sumArr = sum.toString().split("").reverse()
    const sumReturn = new linkedList()
    
    for (let digit of sumArr){
        sumReturn.append(digit)
    }
    
    return console.log(sumReturn)
}

sumOfLinkedLists(listOne, listTwo)

    // turn lists into number
    // add numbers => integer
    // take integer .split, .reverse
    // init linkedList
    // loop over arr and use append method to create linkedlist
