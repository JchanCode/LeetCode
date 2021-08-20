function selectionSort(array) {
    let currIdx = 0;
    while (currIdx < array.length-1) {
        const smallestIdx = findSmallestIdx(array, currIdx);
        swap(array, currIdx, smallestIdx);
        currIdx++;
    }
    return array;
}



function findSmallestIdx(array, startIdx) {

    let smallestIdx = startIdx;
    for ( let i=startIdx; i<array.length; i++ ) {
        if ( array[i] < array[smallestIdx] ) {
            smallestIdx = i;
        };
    };
    return smallestIdx;
};

function swap(array, currIdx, smallestIdx) {
    let temp = array[currIdx];
    array[currIdx] = array[smallestIdx];
    array[smallestIdx] = temp;
}

let a = [8, 5, 2, 9, 5, 6, 3]
console.log(selectionSort(a))