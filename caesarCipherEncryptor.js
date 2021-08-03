function caesarCipherEncryptor(string, key) {

    let newString = "";

    for (const char of string) {
        const oldUniCode = char.charCodeAt();
        const newUniCode = shiftUniCode(oldUniCode, key)
        console.log((oldUniCode+key) % 122)
        newString+= String.fromCharCode(newUniCode);
    }
    return newString
}

function shiftUniCode ( oldUniCode , key ) {
    console.log(key % 26)
    while ( key > 26 ) {
        key -= 26;
    }
    console.log(key)
    return oldUniCode + key > 122 ? 96 + ( (oldUniCode+key) % 122) : oldUniCode + key;
}

let s = "abc"
let k = 52
console.log(caesarCipherEncryptor(s, k))