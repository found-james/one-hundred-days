/*

Given two strings, write a method to decide if one is a permutation of the other.

hints: {

    one: be sure you know what a permutation is,
    two: 3 solution s.t 
        { timeComplex: nln(n), spaceComplex: n },
    three: consider a hash table,
}

*/

let strOne = "onronr"
let strTwo = "tqo"

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

    return permutation
}


checkPerm(strOne, strTwo)

/*
turn str => arrs
make two hash tables to record the number of times a char appears
compare the values of the keys in each cache

*/