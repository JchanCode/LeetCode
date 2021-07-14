function reverseInteger (x: number) : number {
    const maxRange: number = 2147483647;
    const isNegative: number = x < 0 ? -1 : 1;

    x = Math.abs(x);
    
    const reverseX: number = Number(x.toString().split("").reverse().join(""))
    
    if (reverseX > maxRange || reverseX < -1*maxRange ) return 0;
    return isNegative * reverseX;
};

console.log(reverseInteger(-123));