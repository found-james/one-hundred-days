/*

Given two strings, write a method to decide if one is a permutation of the other.

hints: {

    one: be sure you know what a permutation is,
    two: 3 solution s.t 
        { timeComplex: nln(n), spaceComplex: n },
    three: consider a hash table,
}

*/

function checkPerm (strOne, strTwo){

    let permutation = false
    const cacheOne = {}
    const cacheTwo = {}


    const arrOne = strOne.split("")
    const arrTwo= strTwo.split("")

    for (let char of arrOne){
        if(cacheOne[char]) {
            cacheOne[char] = cacheOne[char] + 1
        } else {
            cacheOne[char] = 1
        }
    }

    for (let char of arrTwo){
        if(cacheTwo[char]) {
            cacheTwo[char] = cacheTwo[char] + 1
        } else {
            cacheTwo[char] = 1
        }
    }

    const keys1 = Object.keys(cacheOne)
    const keys2 = Object.keys(cacheTwo)

    if (keys1.length !== keys2.length) return permutation
    
    for (let key of keys1) {

        if (cacheOne[key] !== cacheTwo[key]) return permutation
    
    }

    return permutation = true
}


console.log(checkPerm("one", "two"))
console.log(checkPerm("racecar", "raccear"))


/*
turn str => arrs
make two hash tables to record the number of times a char appears
compare the values of the keys in each cache

*/