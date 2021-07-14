function validSudoku(board) {

    for ( let i = 0 ; i < 9 ; i ++ ) {
        let seen = {};
        let seen1 = {};

        /* horizontal line check */
        for ( let j = 0; j < 9 ; j ++ ) {
            let num = board[i][j];
 
            if ( num !== "." ) {
                if ( seen[num] ) {
                    return false;
                } else {
                    seen[num] = num
                }
            }
        };

        /* vertical line check */
        for ( let k = 0; k < 9 ; k ++ ) {
            let verticalNum = board[k][i];

            if ( verticalNum !== "." ) {
                if ( seen1[verticalNum ] ) {
                    return false;
                } else {
                    seen1[verticalNum] = verticalNum;
                }
            };
        };


        /* 3 x 3 grid check */
        for ( let i = 0 ; i < board.length ; i ++ ) {
            
        }

    }

    return true;
}




const b = [[".",".",".",".","5",".",".","1","."],
           [".","4",".","3",".",".",".",".","."],
           [".",".",".",".",".","3",".",".","1"],
           ["8",".",".",".",".",".",".","2","."],
           [".",".","2",".","7",".",".",".","."],
           [".","1","5",".",".",".",".",".","."],
           [".",".",".",".",".","2",".",".","."],
           [".","2",".","9",".",".",".",".","."],
           [".",".","4",".",".",".",".",".","."]]

console.log(validSudoku(b))
