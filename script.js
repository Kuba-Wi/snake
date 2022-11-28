import { Snake, direction } from "./snake.js";
import { Food } from "./food.js"

let frame_count = 0;

const board_size = 21;
let snake = new Snake(board_size);
let food = new Food(board_size);
let new_direction = direction.up;

if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', () => { main() });
} else {
    main();
}

function main() {
    set_food_position()
    refresh_board()
    listen_arrow_presses()
    window.requestAnimationFrame(game_loop)
}

function game_loop() {
    ++frame_count
    if (frame_count >= 10) {
        snake.change_move_direction(new_direction)
        snake.move()
        if (snake.is_snake_collision()) {
            alert("game over")
            snake.reset_snake()
            set_food_position()
        }
        if (snake.is_snake_position(food.x, food.y)) {
            snake.add_body()
            set_food_position()
        }
        refresh_board()
        frame_count = 0
    }
    window.requestAnimationFrame(game_loop)
}

function set_food_position() {
    while (snake.is_snake_position(food.x, food.y)) {
        food.set_new_position()
    }
}

function refresh_board() {
    let board = document.getElementById("board")
    board.innerHTML = ""
    snake.draw()
    food.draw()
}

function listen_arrow_presses() {
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "ArrowUp":
                new_direction = direction.up
                break;
            case "ArrowRight":
                new_direction = direction.right
                break;
            case "ArrowDown":
                new_direction = direction.down
                break;
            case "ArrowLeft":
                new_direction = direction.left
                break;
        }
    })
}
