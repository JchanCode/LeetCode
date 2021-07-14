function TwoSum(arr, target) {

    let left = 0;
    let right = arr.length-1;

    while ( left < arr.length-1 ) {
        if ( arr[left] + arr[right] === target) {
            return [left, right];
        } else if ( left + 1 === right ) {
            right = arr.length-1;
            left ++;
        } else {
        right --;            
        }
    }
}

function TwoSum1(arr, target ) {
    let obj= {};
    
    for ( let i=0;i<arr.length;i++) {
        console.log(obj)
        let found = target - arr[i];
        if ( obj[found] != null ) {
            return [i , obj[found]]
        } else {
            obj[arr[i]] = i
        }
    }
}
console.log( TwoSum([3,2,4],6))
console.log( TwoSum1([3,2,4],6))