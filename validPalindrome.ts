function validPalindrome(s: string): boolean {

    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();

    let left: number = 0;
    let right: number = s.length-1;
    console.log(s)
    while ( left < right ) {
        if ( s[left] !== s[right] ) return false;
        left++;
        right--;
    }
    return true;
};

let string: string = "eevee"
console.log(validPalindrome(string));