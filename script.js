if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', () => { main() });
} else {
    main();
}

function main() {
    let board = document.getElementById('board');
    board.innerHTML = ""
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = 11
    snakeElement.style.gridColumnStart = 11
    snakeElement.classList.add('snake')
    board.appendChild(snakeElement)
}
