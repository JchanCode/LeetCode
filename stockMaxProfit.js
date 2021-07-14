function stockMaxProfit (arr) {
    let profit = 0;

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i] > arr[i-1] ) {
            profit += arr[i]-arr[i-1]
        }
    }
    return profit;
}

console.log(stockMaxProfit([7,1,5,3,6,4]))