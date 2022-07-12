/*

--- Directions ---

1) Implement the Node class to create
a binary search tree.  The constructor
should initialize values 'data', 'left',
and 'right'.

2) Implement the 'insert' method for the
Node class.  Insert should accept an argument
'data', then create an insert a new node
at the appropriate location in the tree.

3) Implement the 'contains' method for the Node
class.  Contains should accept a 'data' argument
and return the Node in the tree with the same value.

*/

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert (data) {
        const newNode = new Node (data);

        if (this.root === null)
            this.root = newNode;
        else 
            this.insertNode (this.root, newNode);
    }

    insertNode (node, newNode){
        console.log(newNode.data < node.data);

        if (newNode.data < node.data)
        {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
                console.log(newNode.data < node.data)
        }
        else 
        {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}

const binaryTree = new BinarySearchTree();
console.log(binaryTree);

binaryTree.insert("hel")
binaryTree.insert("hel")
console.log(binaryTree)