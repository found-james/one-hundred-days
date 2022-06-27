/*

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

hints: { 
    one: use a hash table, 
    two: try to use a vector, 
    three: provide solution with big O of nln(n)
}

*/


function isUnique (str) {

    if (typeof str !== "string") throw new Error ("strings only")

    let isUnique = true
    const cache = {}
    const strArr = str.split("")


    for (let char of strArr){
        if (cache[char]){
            isUnique = false
            return isUnique
        } else {
            cache[char] = true
        }
    }

    return isUnique
}


/* tests */

console.log(isUnique("hello"))
console.log(isUnique("goodbye"))
console.log(isUnique("dos"))
console.log(isUnique(2))



