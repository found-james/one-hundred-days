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
            return isUnique = false
            
        } else {
            cache[char] = true
        }
    }

    return isUnique
}

function isUniqueStr (str) {
    if (typeof str !== "string") throw new Error ("strings only")

    const cache = {}

    for (let i = 0; i < str.length -1; i++){
        if (cache[str.charAt(i)]) {
            return false
        } else {
            cache[str.charAt(i)] = true
        }
    }

    return true
}
/* tests */

console.log(isUniqueStr("hello"))
console.log(isUniqueStr("goodbye"))
console.log(isUniqueStr("dos"))
// console.log(isUniqueStr(2))



