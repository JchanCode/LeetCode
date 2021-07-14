

function singleNumber(arr){
    arr.sort((a,b)=>a-b);

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( i === 0 ) {
            if ( arr[i] !== arr[i+1] ) {
                return arr[i];
            };
        } else if ( i === arr.length-1 ) {
            if ( arr[i] !== arr[i-1] ) {
                return arr[i];
            };
        } else {
            if ( arr[i] !== arr[i-1] && arr[i] !== arr[i+1] ) {
                return arr[i];
            };
        };
    };
};

console.log(singleNumber([1,2,2,3,3,4,4,5,5,6,6,]))