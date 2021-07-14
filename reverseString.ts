

/* function reverseString(s: Array<string>) {
    return s.reverse();
} */

function reverseString(s: Array<string>) {

    let left: number = 0;
    let right: number = s.length-1;

    while ( left < right ) {
        let temp: string;
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left ++;
        right --;
    };

}
console.log(reverseString(["h","e","l","l","o"]))
