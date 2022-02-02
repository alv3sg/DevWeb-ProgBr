const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"


startGame()

function startGame() {
    //cards = game.createCardFromTechs()
    initializeCards(game.createCardFromTechs())
}

function initializeCards(cards) {
    let gameBord = document.getElementById('gameBoard')

    game.cards.forEach(card=> {
        let cardElement = document.createElement('div')
        cardElement.id = card.id //adiciona o id
        cardElement.classList.add(CARD) //adiciona a classe
        cardElement.dataset.icon = card.icon //adiciona o data-icon
        createCardContent(card, cardElement)


        cardElement.addEventListener('click', flipCard)
        gameBord.appendChild(cardElement)
        console.log(gameBord)
    })


}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)
    if(face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "./images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    }else {
        cardElementFace.innerHTML = "&lt/&gt"
    }
    element.appendChild(cardElementFace)
}




function flipCard(){
    
    if(game.setCard(this.id)){

        this.classList.add("flip")
        if(game.checkMatch()){
            game.clearCards()
        }else {
            setTimeout(()=>{
                let fistCardView = document.getElementById(game.fistCard.id)
                let secondCardView = document.getElementById(game.secondCard.id)

                fistCardView.classList.remove('flip')
                secondCardView.classList.remove('flip')
            })
        }
    }
}