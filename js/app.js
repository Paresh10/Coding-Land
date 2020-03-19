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
    constructor() {
        const colors = ['red', 'yellow', 'blue', 'green', 'white']
        const randomNum = Math.floor(Math.random() * colors.length)
        this.color = colors[randomNum]
    }

}

const app = {
    player1: {
        name: "",
        score: 0,
        hand: []
    },

    player2: {
        name: "",
        score: 0,
        hand: []

    },

    squares: [],
    cards: [],
    cardColor: "",
    currentCard: null,

    createSquares: function() {

        // create 100 squares
        for (let i = 0; i < 30; i++) {

            const sq = new Square()
            this.squares.push(sq)

        }
        this.printSquares()
    },

    printSquares: function() {

        const $squaresContainer = $('.squares')



        for (let i = 0; i < this.squares.length; i++) {

            const $div = $(`<div data-num-square = "${i}" ></div>`).addClass('square')

            if (i % 15 === 0) {
                $div.text('javaScript')
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center',
                    'color': 'white'
                })
                if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
                    $div.css('color', 'black')
                }

            } else if (i % 20 === 0) {
                $div.text('CSS')
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center',
                    'color': 'white'
                })
                if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
                    $div.css('color', 'black')
                }
            } else if (i === 9) {
                $div.text('jQuery!')
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center',
                    'color': 'white'
                })
                if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
                    $div.css('color', 'black')
                }
            }


            $div.css('background-color', this.squares[i].color)

            $squaresContainer.append($div)
        }


    },

    createCards: function() {

        // Create cards array and render it to each player randomaly.
        for (let i = 0; i < 1; i++) {
            const card = new Square()

            this.cards.push(card)
            console.log("This is the most recent card made", card)
        }
        this.displayCard()
        console.log("this is the app.cards array", this.cards)

    },

    displayCard: function() {

        // display card randomaly one by one
        const $cardDisplay = $('#displayCards')


        // to empty the container
        $cardDisplay.empty()


        const $div = $(`<div></div>`).addClass('cards')

        for (let i = 1; i < this.cards.length; i++) {

            $div.css('background-color', this.cards[i].color)
            $div.attr('id', `data-card-square = "${i}"`)


            this.cardColor = this.cards[i].color

            // assign it to variable
            let $trackingCardsColor = this.cardColor

            if ($trackingCardsColor === 'blue' || $trackingCardsColor === 'green' || $trackingCardsColor === 'red') {
                $div.css('color', 'white')

            } else {
                $div.css('color', 'black')
            }

            if (i % 7 == 0) {
                $div.text('javaScript')
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center'
                })

            } else if (i % 20 === 0) {
                $div.text('jQuery!!')
                $div.css({
                    'justify-content': 'center',
                    'align-items': 'center'
                })

            } else {
                $div.text("")

            }

        }
        $cardDisplay.append($div)

    },

    createPlayer1: function(playersName) {

        const newPlayer = new Player(playersName)

        this.player1.name = newPlayer

        let $player1IconAnime = $('.animate')
        $player1IconAnime.css('background-color', 'black')

        this.printPlayer1()

    },

    createPlayer2: function(playersName) {

        const newPlayer = new Player(playersName)

        this.player2.name = newPlayer

        let $player2IconAnime = $('.animate')
        $player2IconAnime.css('background-color', 'red')

        this.printPlayer2()

    },

    printPlayer1: function() {
        const $div = $('#printPlayer1Name')
        $div.text("")


        const $pName1 = $("<p></p>")
        const $pScore1 = $("<p></p>")

        $pName1.text(`Name: ${this.player1.name.playersName}`)

        $pScore1.text("Score:")

        $div.append($pName1)
        $div.append($pScore1)


    },

    printPlayer2: function() {
        const $div = $('#printPlayer2Name')
        $div.text("")


        const $pName2 = $("<p></p>")
        const $pScore2 = $("<p></p>")

        $pName2.text(`Name: ${this.player2.name.playersName}`)

        $pScore2.text("Score:")

        $div.append($pName2)
        $div.append($pScore2)



    },

    createPlayerIcon: function() {
        const $div = $('<div></div>').addClass('animate')

        $(document).ready(function() {

            setInterval(function() {
                $div.fadeOut(2000);
                $div.fadeIn(2000);
            }, 2000);

        })

        $('body').append($div)


    },

    movePlayers: function() {},

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
    $('#players1Form').hide()

    app.createPlayer1($player1)
    app.createPlayerIcon()
})

// for player 2
$('#players2Form').on('submit', (event) => {

    event.preventDefault()

    const $player2 = $('#player2').val()

    $('#players2Form').trigger('reset')

    $('#players2Form').hide()

    app.createPlayer2($player2)
    app.createPlayerIcon()
})


// for player 1
$('#give-me-card').on('click', (event) => {

    app.createCards()

})

// for player 2
$('#give-me-card2').on('click', (event) => {
    app.createCards()
})