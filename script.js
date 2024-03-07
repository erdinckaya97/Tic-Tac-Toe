let board = Array(9).fill("");
let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;

function drawBoard() {
    document.getElementById('board').innerHTML = '';
    for (let i = 0; i < 9; i++) {
        document.getElementById('board').innerHTML += `<div onclick="makeMove(${i})">${board[i]}</div>`;
    }
}

function makeMove(i) {
    if (!board[i]) {
        board[i] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        drawBoard();
        checkForWin();
    }
}

function checkForWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[0]] === board[combination[2]]) {
            setTimeout(() => {
                alert(board[combination[0]] + ' kazandı!');
                updateScore(board[combination[0]]);
                resetBoard();
            }, 100);
        }
    }
}

function updateScore(winner) {
    if (winner === 'X') {
        xScore++;
        document.getElementById('x-score').innerText = `X: ${xScore}`;
    } else {
        oScore++;
        document.getElementById('o-score').innerText = `O: ${oScore}`;
    }
}

function resetBoard() {
    board = Array(9).fill("");
    currentPlayer = 'X';
    drawBoard();
}

document.getElementById('reset').addEventListener('click', resetBoard);
drawBoard();
