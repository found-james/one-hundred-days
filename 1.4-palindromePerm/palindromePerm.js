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
    const arr = str.split("").filter(x => { if(x != " ") return x})

    console.log (arr)

    for (let char of arr){
        if(cache[char]) {
            cache[char] = cache[char] + 1
        } else {
            cache[char] = 1
        }
    }
    
    let numberOfKeys = Object.keys(cache).length
    let count = 0

    console.log(numberOfKeys)


    for (let key in cache){
        cache[key] % 2 === 0 ? count++ : null
    }

    return numberOfKeys !== count ? false : true

}

console.log(palindromePerm("hello you"))
/*
any string that is a palindrome has a midpoint 
to left of midpoint there is the same character count
as to the right of midpoint

futhermore, 
the characters on the LHS are identical to the RHS
the poistions of the identiical characters are equidistant from 
midpoint

midpoint is kinda of a problem...

plan
--
if string.length is odd, then must have a way to identify midpoint for any arbitrary length 

if string.length is even, then ALL chars must appear the same number of times
--

if string.length is odd & midpoint is properly identified. 
to qualify as a palindrome all to guarantee a palindrome is to confirm existence of the necessary chars

if string.length is even & all chars appear the same number of time. done.
case: all chars DO NOT appear the same number of time

question: is it possible to have a palindrome if there are two distinct unique chars in a string?
*/