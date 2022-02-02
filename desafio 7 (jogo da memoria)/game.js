let game = {

    lockMode: false,
    fistCard: null,
    secondCard: null,

    setCard: function(id) {

        let card = this.cards.filter(card => card.id ===id)[0]

        if (card.flipped || this.lockMode) {
            return false
        }

        if(!this.fistCard) {
            this.fistCard = card
            return true
        } else {
            this.secondCard = card
            this.lockMode = true
            return true
        }
    },

    checkMatch: function(){
        return this.fistCard.icon === this.secondCard.icon
    },

    clearCards: function(){
        this.fistCard = null
        this.secondCard = null
        this.lockMode = false
    },

    techs: ['bootstrap',
            'css',
            'electron',
            'firebase',
            'html',
            'javascript',
            'jquery',
            'mongo',
            'node',
            'react'],

    cards: null,

    createCardFromTechs: function() {
        this.cards = []
        // for (let tech of techs) {
            this.techs.forEach((tech) => { 
            this.cards.push(this.createPairFromTech(tech))
        })
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
        return this.cards
        
    },
    
    createPairFromTech: function(tech){
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    
    createIdWithTech: function(tech) {
        return tech + parseInt(Math.random() * 1000)
    },

    shuffleCards: function(cards){
        let currentIndex = this.cards.length
        let randomIndex = 0
    
        while (currentIndex !== 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}