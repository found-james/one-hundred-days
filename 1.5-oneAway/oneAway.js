/*

Given two strings, write a function to check if they are at most one edit away.
Where an edit is insert, remove, or replace ONE CHARACTER

hints: {
    one: does it make sense to use the editType as a lens ?
    two: what are the relationships between editTypes?
}
*/

function oneAway (strA, strB){

    if (typeof strA && typeof strB !== "string" ) throw new Error ("strings only")
    // case: strings are same length

    if (strA.length === strB.length) {
        let matches = 0
        
        for (let i = 0; i < strA.length; i++){
            if (strA.charAt(i) === strB.charAt(i)) matches++
        }
        
        return matches === strA.length - 1 || matches === strA.length ? true : false
    }


    // case: strings are not same length
    let strOne
    let strTwo

    if (strA.length <= strB.length){
        strTwo = strA
        strOne = strB
    } else {
        strTwo = strB
        strOne = strA
    }

}

console.log(oneAway("hello", "hpllo"))
/*


editType insert is applicable only if the difference between the string.lengths
is exactly one. Same holds true for remove editType.

editType replace is applicable if the string.lenths are equal
--

Plan

Prompt stipulates that an edit involves an action (insert, remove, replace) of one character

There are two general cases

case one: strings are same length 

-check if strings are equivalent using ===. done
-if strings 

-check the order of the letters as only one repalce is allowed (swap -- might require two edits)
*at most two letters can be out of place


case two: stringOne.length !== stringTwo.length
-


*/