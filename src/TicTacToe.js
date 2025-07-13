const Matrix = require('./Matrix')

class TicTacToe extends Matrix {
    constructor() {
        super(0, 0);
    }

    loadBoard() {
        for (let r = 0; r < 3; r++) {
            this.matrix.push([])
            for (let c = 0; c < 3; c++) {
                this.matrix[r].push('.')
            }
        }
    }

    play(rowNum, colNum, player) {
        if (player === 1) this.alter(rowNum, colNum, 'x');
        else this.alter(rowNum, colNum, 'o')

        if ( (this.get(0,colNum)==='x' && this.get(1,colNum)==='x' && this.get(2,colNum)==='x') || 
            (this.get(0,colNum)==='o' && this.get(1,colNum)==='o' && this.get(2,colNum)==='o'))
            console.log(`Congratulations Player ${player}`)
    }
}


let board = new TicTacToe()
board.loadBoard()
board.print()
//prints
/*
.       .       .
.       .       .
.       .       .
*/

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1
    
board.print()