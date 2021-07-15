function validAnagram(s:string, t:string):boolean {
    if ( s.length !== t.length ) return false;
    let table: object = {};

    for ( let char of s ) {
        table[char] = table[char]+1 || 1;
    }

    for ( let char of t ) {
        if ( !table[char] ) return false;
        table[char]--;
        if ( table[char] === 0 ) delete table[char];
    } 

    return Object.keys(table).length === 0;
}


// function validAnagram(s:string, t:string):boolean {
//     if (s.length !== t.length) return false;
//     return s.split("").sort().join("") == t.split("").sort().join("");
// }

let s = "abcdefgh"
let t = "hgfedcba"
console.log(validAnagram(s,t))
// console.log(validAnagram())
// console.log(validAnagram())