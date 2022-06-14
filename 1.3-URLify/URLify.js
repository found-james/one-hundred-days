/*

Write a method to replace all spaces in a string with "%20" 

hints:{
    one: modify the string from end to start,
    two: count the number of spaces
}
*/

function urlify (str) {
    if (typeof str != "string") throw new Error ("strings only")
    return str.split("").map( x => x != " " ? x : "%20").join("")

}

/* tests */

console.log(urlify("mr john go"))
console.log(urlify(3404))