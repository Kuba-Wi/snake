export class Food {
    x; y;

    constructor(board_size) {
        this.board_size = board_size
        this.set_new_position(board_size)
    }

    set_new_position() {
        this.x = Math.round(Math.random() * this.board_size)
        this.y = Math.round(Math.random() * this.board_size)
        if (this.x == 0) {
            this.x = 1
        }
        if (this.y == 0) {
            this.y = 1
        }
    }

    draw(board) {
        let food = document.createElement("div")
        food.style.gridRowStart = this.y
        food.style.gridColumnStart = this.x
        food.classList.add("food")
        board.appendChild(food)
    }
}
