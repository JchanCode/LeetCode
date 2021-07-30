function insertionSort(array) {
    // Write your code here.
      let insertRight = 0;
      
      for ( let i=1 ; i<array.length; i++ ) {
          if ( array[i] < array[insertRight] ) {
                
              for ( let j=insertRight; j>=0 ; j-- ) {
                  if ( array[j+1] <= array[j] ) {
                      let temp = array[j+1]
                      array[j+1] = array[j];
                      array[j] = temp;
                  }	
              }

          }
      insertRight++;
      }
      
      return array;
}

  let a = [8,6,4,32,5,8,90,4];


  console.log(insertionSort(a) )