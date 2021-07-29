// function bubbleSort (array) {

// 	let swapped = true;	
// 	let start = 0;
// 	let end = array.length-1;
	
// 	while ( start <= end ) {
//         // if we are at the end of array and swapped remains false; we can return array.
//         if ( !swapped && start == end ) return array;

// 		// if correct order
// 		if ( array[start] <= array[start+1] ) {
			
// 			start++;
// 		// not correct order 
// 		} else {
//             swapped = true;
// 			let smallerNum = array[start+1];
// 			array[start+1] = array[start];
// 			array[start] = smallerNum;
// 			start++;
// 		};

// 	}
	
//     return array;
// };

// function bubbleSort (array) {

//     for ( let i=0; i< array.length ; i++ ) {

//         for ( let j=0; j<array.length ; j++ ) {
//             if ( array[j] > array[j+1]) {
//                 let temp = array[j+1];
//                 array[j+1] = array[j];
//                 array[j] = temp;
//             }
//         }

//     }

//     return array;
// }

function bubbleSort(array) {
    let swapped = true;
    let end = array.length;
    while ( swapped ) {
        swapped = false;
        for ( let i=0 ; i<end ; i++ ) {
            if ( array[i] > array[i+1] ) {
                swapped = true;
                swap(array, i)
            } ;
        }
    }
    return array;
}

function swap (array, idx) {
    const smallerNum = array[idx+1] 
    array[idx+1] = array[idx];
    array[idx] = smallerNum
}

let a = [ 2,6,3,9,2,8,23,1,9]

console.log(bubbleSort(a))