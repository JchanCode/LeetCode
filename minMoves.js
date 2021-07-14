function minMoves(arr) {

    /*
    count 1 and 0 ,
    find the mid pooiint, 
    find out how many number is misplaced.
    */ 
    let ones = 0;
    let zeros = 0;
    for ( let i of arr ) {
        if ( i === 1 ) {
            ones++;
        } else if ( i === 0 ) {
            zeros ++;
        }
    }
    /*
    idx 0  till  idx ones-1 should be 1s
    idx ones till arr.length-1 should be 0s
    */
    let outOfplaceOne = 0;
    let outOfplaceZero = 0;


    for ( let j = 0; j < arr.length; j++ ) {
        if ( j >= 0 && j < ones ) {
            if ( arr[j] === 0 ) {
                outOfplaceZero = outOfplaceZero + j;
            };
        } else if ( j >= ones && j < arr.length ) {
            if ( arr[j] === 1 ) {
                outOfplaceOne = outOfplaceOne + j;
            }
        }
    };

    console.log(outOfplaceOne, outOfplaceZero)
    return outOfplaceOne - outOfplaceZero;
};

console.log(minMoves([1,0,0,1,0,1,1,0,0,1]))