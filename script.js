const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]

    return {
        restartGame: () => board = ["", "", "", "", "", "", "", "", ""],
        updateBoard: (index, marker) => {
            if (board[index] === "") {
                board[index] = marker
            }
        }
    }
})()

const Player = (name, marker) => {
    return {
        getName: () => name,
        getMarker: () => marker
    }
}

const Player1 = Player("X", "X")
const Player2 = Player("O", "O")