function productSum(array, depth=1) {
	let sum = 0;
	
	
	for ( let num of array ) {
        console.log("num",num)
		if ( !Array.isArray(num) ) {
    
			sum += num;

		} else {
            
			depth++;
            console.log("num:", num, "<" + " Depth:", depth)
			let arrSum = depth * productSum(num, depth) ;
            console.log("arrSum:", arrSum)
            sum += arrSum;
            depth--;
		}
        
        
		console.log("Current Sum:", sum)
	}
	
	return sum
}

let a = [1, 2, [3], 4, 5]

console.log(productSum(a))