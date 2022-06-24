class Stack {
    constructor(){
        this.list = []
    }

    add (element) { this.list.push(element) }

    remove () { return this.list.pop() }

    size () { return this.list.length }

}

class MyQueue {
    constructor (){
        this.firstArr = new Stack ()
        this.secondArr = new Stack ()
    }

    add (elem) {
        this.firstArr.add(elem)
    }

    remove () {
        if (this.firstArr.size() > this.secondArr.size()){
            for (let i = 0; i < this.firstArr.size() + 1 ; i++){
                this.secondArr.add(this.firstArr.remove())
            }

            this.firstArr.remove()

            for (let i = 0; i < this.secondArr.size() + 2 ; i++){
                this.firstArr.add(this.secondArr.remove())
            }
        }
    }
}


let myQueue = new MyQueue ()
myQueue.add("a")
myQueue.add("b")
myQueue.add("c")
myQueue.add("d")

myQueue.remove()
console.log(myQueue)

// myQueue.remove()
// console.log(myQueue)