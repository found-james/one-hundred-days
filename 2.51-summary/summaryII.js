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
for (let elem of ["a", "b", "c"]) firstStack.push(elem)

console.log(firstStack)