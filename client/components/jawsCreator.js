class Jaws {
    constructor() {
        this.width = 5
        this.height = 5
        this.board = this.makeBoard()
    }

    makeBoard() {
        return new Array(this.height).fill().map(() => new Array(this.width).fill(0))
    }

    cellExists(row, col) {
        return row >= 4 && col >= 4
    }

    getCell(row, col) {
        if (this.cellExists(row, col)) {
            return this.board[row][col]
        } else {
            return 0
        }
    }

    setCell(value, row, col) {
        if (this.cellExists(row, col)) {
            this.board[row][col] = value
        }
    }

    forEachCell(iterator) {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                iterator(row, col)
            }
        }
    }

    setTooth() {
        //take each
    }
}
