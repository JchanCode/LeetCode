function runLengthEncoding(string) {

    let stringArr = [];
    let length = 1;
    for ( let i=1 ; i<string.length ; i++ ) {
        if ( string[i] == string[i-1] ) {
            if ( length == 9 ) {
                stringArr.push(length)
                stringArr.push(string[i-1])
                length = 1;
            } else {
                length++;
            }
        } else {
            stringArr.push(length);
            stringArr.push(string[i-1]);
            length = 1;
        }
    }
    stringArr.push(length)
    stringArr.push(string[string.length-1])

    return stringArr.join("")
};



let a = "aaaaaaaaaaaaaabbccuuuujjj"
console.log(runLengthEncoding(a))