let checkArray = [];
for (let i = 0; i <= 6; i++) {
    checkArray.push([null,null,null,null,null,null,null]);
}

let gameWon = false;
let playerNumber = 1;

function game(id) {
    row = parseInt(id.charAt(3));
    column = parseInt(id.charAt(10));
    let promise = function gameState(){
        return new Promise((resolve, reject) => { 
            if (gameWon == false) {
                checkArea(row, column, id, playerNumber);
            }
            setTimeout(() => {  
                resolve()
            }, 100) 
        })
    }
    promise().then(() => {
        if (gameWon == true) {
            alert("Player " + playerNumber + " wins! Please reload the page to play again!");
        }
        if (playerNumber == 1) {
            playerNumber++;
        } else {
            playerNumber--;
        }
    })
}

function checkArea(row, col, id, playerNumber) {
    if (row == 6) {
        click(row, col, ("row" + row.toString() + "column" + col.toString()), playerNumber); 
        return;
    }
    while(checkArray[row+1][col] == null) {
        if (row+1 == 6) {
            click(row+1, col, ("row" + (row+1).toString() + "column" + col.toString()), playerNumber);
            return;
        }
        row++;
    }
    click(row, col, ("row" + row.toString() + "column" + col.toString()), playerNumber);
    return;
}

function click(row, col, id, playerNumber) {
    if (playerNumber == 1) {
        document.getElementById(id).style.backgroundColor="yellow";
        checkArray[row][col] = 1;
        checkWon(playerNumber);
    } else if (playerNumber == 2) {
        document.getElementById(id).style.backgroundColor="red";
        checkArray[row][col] = 2;
        checkWon(playerNumber);
    }
}

function checkVertical(playerNumber) {
    for (let col = 0; col <= 6; col++) {
        for (let row = 6; row >= 3; row--) {
            if (checkArray[row][col] == playerNumber && checkArray[row-1][col] == playerNumber && checkArray[row-2][col] == playerNumber && checkArray[row-3][col] == playerNumber) {
                gameWon = true;
            } 
        }
    }
}

function checkDiagRight(playerNumber) {
    for (let col = 0; col <= 6; col++) {
        for (let row = 6; row >= 3; row--) {
            if (checkArray[row][col] == playerNumber && checkArray[row-1][col+1] == playerNumber && checkArray[row-2][col+2] == playerNumber && checkArray[row-3][col+3] == playerNumber) {
                gameWon = true;
            } 
        }
    }
}

function checkHorizontal(playerNumber) {
    for (let row = 0; row <= 6; row++) {
        for (let col = 6; col >= 3; col--) {
            if (checkArray[row][col] == playerNumber && checkArray[row][col-1] == playerNumber && checkArray[row][col-2] == playerNumber && checkArray[row][col-3] == playerNumber) {
                gameWon = true;
            } 
        }
    }
}

function checkDiagLeft(playerNumber) {
    for (let col = 0; col <= 6; col++) {
        for (let row = 6; row >= 3; row--) {
            if (checkArray[row][col] == playerNumber && checkArray[row-1][col-1] == playerNumber && checkArray[row-2][col-2] == playerNumber && checkArray[row-3][col-3] == playerNumber) {
                gameWon = true;
            } 
        }
    }
}

function checkWon(playerNumber) {
    checkVertical(playerNumber);
    checkHorizontal(playerNumber);
    checkDiagLeft(playerNumber);
    checkDiagRight(playerNumber);
}