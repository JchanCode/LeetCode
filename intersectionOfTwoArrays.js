function intersectionOfTwoArrays(arr1,arr2) { 

    let smallerArr = arr1.length < arr2.length ? arr1 : arr2 ;
    let biggerArr = arr1.length < arr2.length ? arr2 : arr1;  
    let arr = [];
    let i = 0;
    let j = 0;

    while ( i < smallerArr.length ) {
        
        if ( j > biggerArr.length ) {
            j = 0;
            i ++;
        } else if ( smallerArr[i] === biggerArr[j] ) {
            arr.push(smallerArr[i]);
            biggerArr.splice(j,1)
            i ++;
            j = 0;
        } else {
            j++;
        }
    }
    return arr;
}

console.log(intersectionOfTwoArrays([2,1],[1,2]))