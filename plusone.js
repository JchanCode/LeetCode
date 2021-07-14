/* 
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Input: digits = [0]
Output: [1]

myNote: Number(), parseInt() doesn't work on number thats too large, leetcode has a test case with large number.

*/

function plusOne (arr) {
    let carryOver = false;
    let lastNum = arr.length-1;
        
    for (let i=arr.length-1;i>=0;i--) {
        if ( i === arr.length-1 && ++arr[lastNum] >= 10 ) {
            carryOver = true;
            arr[i] = 0;
        };
        while ( carryOver ) {
            if ( ++arr[i-1] >= 10 ) {
                
            }
        }

    }
    return arr
}
console.log(plusOne([0]))
console.log(plusOne([9]))
console.log(plusOne([9,9]))