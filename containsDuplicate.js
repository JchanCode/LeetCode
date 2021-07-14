function containsDuplicate (arr) {
    const set1 = new Set(arr);

    if ( set1.size !== arr.length ) {
        return true;
    } else {
        return false
    };
}

console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1]))