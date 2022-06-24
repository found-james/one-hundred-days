/*

implement stack data struc using a class + array
search for alternative method to model stack in JS

*/

class Stack {
    constructor(){
        this.list = []
    }

    add (element) { this.list.push(element) }

    remove () { return this.push.pop() }

    size () { return this.list.length }

}

const firstStack = new Stack ()
for (let elem of ["a", "b", "c"]) firstStack.add(elem)
console.log(firstStack)

class StackAlso {
    #items = []
    add = (elem) => this.#items.push(elem)
    remove = () => this.#items.pop()
    size = () => this.#items.length

}

const secondStack = new StackAlso ()
for (let elem of ["a", "b", "c"]) secondStack.add(elem)

console.log(secondStack.size())


// console.log(secondStack.items.pop())