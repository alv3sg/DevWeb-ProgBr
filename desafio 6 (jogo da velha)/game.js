//iniciar minhas variaveis
let border = ['','','','','','','','','']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = false
let winStage = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove (position) {

    if(gameOver) {
        return
        
    }

    if(border[position ] == ''){
        border[position] = symbols[playerTime]

        gameOver = isWin ()

        if (!gameOver){

            playerTime = (playerTime == 0) ? 1 : 0
            /*if(playerTime == 0) {
                playerTime = 1
            } else {
                playerTime = 0
            }*/
        }
    }

    return gameOver
}

function isWin() {   

    for (let i=0;i<winStage.length;i++) {
        let seq = winStage[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (border[pos1] == border[pos2] &&
            border[pos1] == border[pos3] &&
            border[pos1] != '') {
                return true
            }
        
    }
}
