function threeNumberSum(array, targetSum) {

	array.sort((a,b)=>a-b);
	let result = [];

    for ( let i=0; i<array.length ; i++ ) {
	    let left = i+1;
        let right = array.length-1;        

        while ( left < right ) {
            let currSum = array[left]+array[i]+array[right];
            if ( currSum == targetSum ) {
                result.push( [array[i], array[left], array[right]] );
                left++;
            } else if ( currSum < targetSum ) {
                left++;
            } else if ( currSum > targetSum ) {
                right--;
            }
        }       

    }

	
	return result;
}


const a= [12, 3, 1, 2, -6, 5, -8, 6]
const b= 0
console.log(threeNumberSum(a, b))