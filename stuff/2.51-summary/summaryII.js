/*

implement stack data struc using a class + array
search for alternative method to model stack in JS

*/

class Stack {
    constructor(){
        this.list = []
    }

    add (element) { this.list.push(element) }

    remove () { return this.list.pop() }

    size () { return this.list.length }

}

const firstStack = new Stack ()
for (let elem of ["a", "b", "c"]) firstStack.add(elem)

class StackAlso {
    items = []
    add = (elem) => this.items.push(elem)
    remove = () => this.items.pop()
    size = () => this.items.length

}

const secondStack = new StackAlso ()
for (let elem of ["a", "b", "c"]) secondStack.add(elem)

secondStack.items.push("e")
console.log(secondStack.items)


// console.log(secondStack.items.pop())