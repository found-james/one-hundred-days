/*

Given a string, write a function to check if it is a permutation of a palindrome.

Ignore casing and permutations need not be dictionary words.

hints: {
    one: do not find all the permutations,
    two: make you sure know what a string permutation is,
    three: A hash table can provide a result with big O of n - linear time
    four: use a bit vector?
}
*/

function palindromePerm (str){

    const cache ={}
    const arr = str.split("").filter(x => { if(x != " ") return x })

    for (let char of arr){
        if(cache[char]) {
            cache[char] = cache[char] + 1
        } else {
            cache[char] = 1
        }
    }
    
    let numberOfKeys = Object.keys(cache).length
    let evenKeysCount = 0
    let oddKeysCount = 0

    for (let key in cache){
        cache[key] % 2 === 0 ? evenKeysCount++ : oddKeysCount++
    }

    return str.length % 2 === 0 ? numberOfKeys === count 
            : oddKeysCount % 2 !== 0 ? true : false

}

console.log(palindromePerm("racecar"))
