/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 */


// function firstUniqueCharInAString ( s )  {
//     const map = new Map();

//     for ( let i = 0; i < s.length; i++ ) {
//         if ( map.get(s[i]) ) {
//             let val= map.get(s[i])
//             val ++;
//             map.set(s[i], val);
//         } else {
//             map.set(s[i], 1);
//         }
//     }

//     let target;
//     for (const [key, value] of map) {
//         if (value === 1) {
//             target = key;
//             break;
//         }
//     };

//     for ( let j = 0 ; j < s.length ; j++ ) {
//         if ( s[j] === target ) {
//             return j;
//         }
//     }

//     return -1;
// };

// function firstUniqueCharInAString( s: string ): number {
//     for ( let i = 0; i < s.length ; i++ ) {
//         if ( s.indexOf(s[i]) === s.lastIndexOf(s[i]) ) return i;
//     }
//     return -1;
// }

function firstUniqueCharInAString( s:string): number {

    let map = {};

    for ( let i of s ) {
        map[i] ? map[i]++ : map[i] = 1;
    };

    for ( let j=0 ; j<s.length ; j++ ) {
        if (map[s[j]] === 1) {
            return j;
        }
    }
    return -1
}

// let s = "leetcode";
// let s = "loveleetcode";
// let s = "aabb"
console.log(firstUniqueCharInAString(s))