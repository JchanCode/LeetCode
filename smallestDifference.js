// function smallestDifference(arrayOne, arrayTwo) {
//     // find a pair cloest to zero;

//     //absDifference is Math.abs(a-b);
//     let smallest = {
//         diff : Infinity,
//         arrayA: 0,
//         arrayB: 0,
//     };

//     for ( let a=0 ; a<arrayOne.length ; a++ ) {
//         // find smallest smallest to 0;
//         let numA = arrayOne[a];
//         for ( let b=0; b<arrayTwo.length; b++ ) {
//             let numB = arrayTwo[b];
//             let absDiff = Math.abs(numA - numB);

//             if ( absDiff < smallest.diff ) {
//                 smallest.diff = absDiff;
//                 smallest.arrayA = numA;
//                 smallest.arrayB = numB;
//             }

//         }
//     }

//     return [smallest.arrayA, smallest.arrayB]
// }

const smallestDifference = (arrayA, arrayB) => {
    /* the smallest difference means  two number is cloest. */

    arrayA.sort( (a,b) => a-b);
    arrayB.sort( (a,b) => a-b );
    
    let idxA=0 , idxB=0;
    let smallestDiff = Infinity;
    let currDiff = Infinity;
    let smallestPair = [];

    while ( idxA < arrayA.length && idxB < arrayB.length ) {
        let numA = arrayA[idxA];
        let numB = arrayB[idxB];

        if ( numA == numB ) {
            return [numA, numB];
        } else if ( numA < numB ) {
            currDiff = numB - numA;
            idxA++;
        } else {
            currDiff = numA - numB;
            idxB++; 
        };


        if ( currDiff < smallestDiff ) {
            smallestDiff = currDiff;
            smallestPair = [numA, numB]
        }
    }

    return smallestPair;
}; 


const a = [-1, 5, 10, 20, 28, 3]
const b = [26, 134, 135, 15, 17]

console.log(smallestDifference(a,b))
  
  
  