console.log("Coding Land")

// print squares on the board.
// Give them different random colors of blue, yellow, green, red and white
class Player {
    constructor(playersName) {
        this.playersName = playersName
    }
}

class Square {

    // create class square and in constructor create array of colors and get it randomly via Math.floo
    constructor(text) {
        const colors = ['red', 'yellow', 'blue', 'green', 'white']
        const randomNum = Math.floor(Math.random() * colors.length)
        this.color = colors[randomNum]
        this.text = text
    }

}

const app = {
    player1: {
        name: "",
        hand: null,
        text: "",
        location: null
    },

    player2: {
        name: "",
        hand: null,
        text: "",
        location: null

    },

    squares: [],
    squaresCard: null,
    cards: [],
    cardColor: "",
    currentCard: null,

    createSquares: function() {

        // create 100 squares
        for (let i = 0; i < 40; i++) {

            let skill = "";

            if (i == 7 || i == 28) {
                skill = "JavaScript"


            } else if (i == 3 || i == 24) {
                skill = 'jQuery'


            } else if (i == 5 || i == 19) {
                skill = "CSS"

            } else if (i == 1) {
                skill = "Go back to ⬇️"
            } else if (i == 25) {
                skill = "⬇️"
            }

            const sq = new Square(skill)
            this.squares.push(sq)

        }
        this.printSquares()
    },

    printSquares: function() {

        const $squaresContainer = $('.squares')



        for (let i = 0; i < this.squares.length; i++) {

            const $div = $(`<div data-num-square="${i}" ></div>`).addClass(`square ${i}`)


            this.squaresCard = this.squares[i].color
            // if (i == 6 || i == 30) {
            //     $div.text('javaScript')

            //     if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
            //         $div.css('color', 'black')
            //     }

            // } else if (i == 9 || i == 25) {
            //     $div.text('CSS')

            //     if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
            //         $div.css('color', 'black')
            //     }
            // } else if (i == 3 || i == 19) {
            //     $div.text('jQuery!')

            //     if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
            //         $div.css('color', 'black')
            //     }
            // }
            // $div.css({
            //     'vertical-align': 'top'

            // })

            // $div.html(this.squares[i].text + '<br />')

            $div.html(
                '<p id="skill">' + this.squares[i].text + '</p>' +
                '<p id="slot1" />' +
                '<p id="slot2" />')

            $div.css('background-color', "white")

            $squaresContainer.append($div)
        }


    },

    createCards: function() {

        // Create cards array and render it to each player randomaly.
        for (let i = 0; i < 1; i++) {
            const card = new Square()

            this.cards.push(card)
            // console.log("This is the most recent card made", card)

        }
        this.displayCard()
        // console.log("this is the app.cards array", this.cards)


    },
    //two ways we can do this. 
    //first, we could try to pass a parameter to displayCard(theNewCard) --inside the createCards function, when you call display card, you would pass the new card as the argument, like this.displacyCard(newCard)
    //OR you can have createCard make the current card the newly creted one and have displaycard ONLY displauy the current card.

    displayCard: function() {

        // display card randomaly one by one
        const $cardDisplay = $('#displayCards')


        // to empty the container
        $cardDisplay.empty()


        const $div = $(`<div></div>`).addClass('cards')

        for (let i = 0; i < this.cards.length; i++) {

            $div.css('background-color', "white")
            $div.attr('id', `data-card-square = "${i}"`)

            this.currentCard = this.cards[i]
            this.cardColor = this.cards[i].color
            // assign it to variable
            let $trackingCardsColor = this.cardColor

            if (i % 5 == 1) {
                this.currentCard.text = "Move 2 steps"
                $div.text("Move 2 steps")
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center'
                })

            } 
            else {
                this.currentCard.text = "Move 1 Step"
                $div.text("Move 1 step")
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center'
                })                

            }

        }
        $cardDisplay.append($div)

    },


    plyayer1Card: function() {
        this.player1.hand = this.currentCard
    },

    plyayer2Card: function() {
        this.player2.hand = this.currentCard
    },


    createPlayer1: function(playersName) {

        const newPlayer = new Player(playersName)

        this.player1.name = newPlayer


        this.printPlayer1()


    },

    createPlayer2: function(playersName) {

        const newPlayer = new Player(playersName)

        this.player2.name = newPlayer


        this.printPlayer2()

    },

    printPlayer1: function() {
        const $div = $('#printPlayer1Name')
        $div.text("")


        const $pName1 = $("<p></p>").addClass("pName")

        let playerName = this.player1.name.playersName

        if (playerName === undefined)
            playerName = ''

        $pName1.text(`Name: ${playerName}`)

        $div.append($pName1)

    },

    printPlayer2: function() {
        const $div = $('#printPlayer2Name')
        $div.text("")


        const $pName2 = $("<p></p>").addClass("pName")

        let playerName = this.player2.name.playersName

        if (playerName === undefined)
            playerName = ''

        $pName2.text(`Name: ${playerName}`)


        $div.append($pName2)

    },

    movePlayer: function(player, slotId) {

        if (player.location == null) // if the player is just starting...
        {
            player.location = this.squares.length - 1;
        }
        else // if the player is already on a card...
        {  
 
            if (this.previousCardContents) // if we saved the previous card content...
            {
                $('.' + player.location).find(slotId).html(this.previousCardContents)

                this.previousCardContents = null;
            }

            else // we don't have any contents for the previous card...
            {
                $('.' + player.location).find(slotId).html('')
            }

            if (player.location === 28)
                player.location = 7
            if (player.location === 24)
                player.location = 3
            if (player.location === 19)
                player.location = 5
            if (player.location === 1)
                player.location = 25
            else 

                player.location--;
        }
         if (this.currentCard.text == "Move 2 steps") {
                player.location -= 1
            }

        let newCardClass = '.' + player.location;

        // Save the card's contents for later.
        this.previousCardContents = $(newCardClass).find(slotId).html();

        // Append the player's name to the card's content.
        $(newCardClass).find(slotId).html(player.name.playersName)
    },

    winCheckForPlayer1: function() {

        if (this.player1.location <= 0) {

            const $winMessage = $('<p></p>').addClass('.winMessage')
            $winMessage.text(`Congratulations ${this.player1.name.playersName}`)

            $('#winner').show()
            $('#displayCards').hide()

            $('#winner').append($winMessage)
            return
        }
    },

    winCheckForPlayer2: function() {
        if (this.player2.location <= 0) {

            const $winMessage = $('<p></p>').addClass('.winMessage')
            $winMessage.text(`Congratulations ${this.player2.name.playersName}`)

            $('#winner').show()
            $('#displayCards').hide()

            $('#winner').append($winMessage)
            return
        }
    },

    startGame: function() {
        this.createSquares()
        this.createPlayer1()
        this.createPlayer2()




    }

}

app.startGame()


// for player 1
$('#players1Form').on('submit', (event) => {

    event.preventDefault()

    const $player1 = $('#player1').val()

    $('#players1Form').trigger('reset')

    app.createPlayer1($player1)
})

// for player 2
$('#players2Form').on('submit', (event) => {

    event.preventDefault()

    const $player2 = $('#player2').val()

    $('#players2Form').trigger('reset')

    app.createPlayer2($player2)
})


// for player 1
$('#give-me-card').on('click', (event) => {

    app.createCards()
    app.plyayer1Card()
    app.movePlayer(app.player1, '#slot1')
    app.winCheckForPlayer1()



})

// for player 2
$('#give-me-card2').on('click', (event) => {

    app.createCards()
    app.plyayer2Card()
    app.movePlayer(app.player2, '#slot2')
    app.winCheckForPlayer2()
})




////////ON Movement
//You will need to set the player's starting location, and if you're using append, find the class, id, or other identifier of the div to move to based on player current position, and the value of the card they drew


//Otherwise you can change innerHTML or other attributes of the elements to make it look like the players are moving. I would suggest append, or trying that first at least.
