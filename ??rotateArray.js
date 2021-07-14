function rotateArray (arr, steps) {
    let newArray = []
    let len = arr.length

    for ( let i = 0 ; i < len ; i ++ ) {
        let newIdx = i + steps;
        if ( newIdx >= len ) {
            newIdx = newIdx - len;
            newArray[newIdx] = arr[i];
        } else {
            newArray[newIdx] = arr[i];
        }
    }

    return newArray
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))