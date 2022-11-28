export const direction = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
}

export class Snake {
    constructor(board_size) {
        this.board_size = board_size
        this.body = [{x: Math.round(board_size / 2), y: Math.round(board_size / 2)}]
        this.move_dir = direction.up
    }

    move() {
        for (let i = this.body.length - 1; i >= 1; --i) {
            this.body[i] = {...this.body[i - 1]}
        }

        switch (this.move_dir) {
            case direction.up:
                if (this.body[0].y == 1) {
                    this.body[0].y = this.board_size + 1
                }
                --this.body[0].y
                break;
            case direction.right:
                if (this.body[0].x == this.board_size) {
                    this.body[0].x = 0
                }
                ++this.body[0].x
                break;
            case direction.down:
                if (this.body[0].y == this.board_size) {
                    this.body[0].y = 0
                }
                ++this.body[0].y
                break;
            case direction.left:
                if (this.body[0].x == 1) {
                    this.body[0].x = this.board_size + 1
                }
                --this.body[0].x
                break;
        }
    }

    draw() {
        let board = document.getElementById("board")
        for (let i = 0; i < this.body.length; ++i) {
            let snake_element = document.createElement("div")
            snake_element.style.gridRowStart = this.body[i].y
            snake_element.style.gridColumnStart = this.body[i].x
            snake_element.classList.add("snake")
            board.appendChild(snake_element)
        }
    }

    add_body() {
        this.body.push({...this.body.at(-1)})
    }

    is_snake_position(x_pos, y_pos) {
        return this.body.find(element => (element.x === x_pos && element.y === y_pos)) != undefined
    }

    is_snake_collision() {
        for (let i = 1; i < this.body.length; ++i) {
            if (this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y) {
                return true
            }
        }
        return false
    }

    change_move_direction(new_direction) {
        if (this.move_dir == direction.up && new_direction != direction.down)
            this.move_dir = new_direction
        else if (this.move_dir == direction.down && new_direction != direction.up)
            this.move_dir = new_direction
        else if (this.move_dir == direction.left && new_direction != direction.right)
            this.move_dir = new_direction
        else if (this.move_dir == direction.right && new_direction != direction.left)
            this.move_dir = new_direction
    }

    reset_snake() {
        this.body = [{x: Math.round(this.board_size / 2), y: Math.round(this.board_size / 2)}]
        this.move_dir = direction.up
    }
}
