//quando o documento for carregado (DOMContentLoaded), ira executar a seguinte função (()=>)
document.addEventListener('DOMContentLoaded', () => {

    let square = document.querySelectorAll('.square')
    square.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
    let reset = document.getElementById('reset')
    reset.addEventListener('click', newGame)
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    handleMove(position)
    updateSquare(position)
    if (gameOver) {
        setTimeout( () => {
            alert('Fim de jogo. O vencedor foi o jogador ' + playerTime)
        }, 10)
        
    }
    
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbols = border[position]
    square.innerHTML = `<div class='${symbols}'></div>`
}

function newGame() {
      location.reload()    
}

