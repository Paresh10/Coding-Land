
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
		const colors = ['red','yellow', 'blue', 'green', 'white']
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

	createSquares: function () {

		// create 100 squares
		for (let i = 1; i < 10; i++) {

			const sq = new Square()
			this.squares.push(sq)

		}
		this.printSquares()
	},

	printSquares: function () {

		const $squaresContainer = $('.squares')

		

		for (let i = 1; i < this.squares.length; i++) {

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

			}
			else if (i % 20 === 0) {
				$div.text('CSS')
				$div.css({
					'justify-content': 'center',
					'align-items': 'center',
					'color': 'white'
				})
				if (this.squares[i].color === 'white' || this.squares[i].color === 'yellow') {
					$div.css('color', 'black')
				}
			}
			else if (i === 9) {
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

		const $giveMeACard = $('#give-me-card')

		//find a way to clear out the old display, and that will clear the board, but the upcoming for loop 
		//will just add everything in the cards array automatically.
		
		// $cardDisplay.hide()

		const $div = $(`<div></div>`).addClass('cards')  // data-card-square = "${i}" 
	

		for (let i = 0; i < this.cards.length; i++) {

			$div.css('background-color', this.cards[i].color)
			this.currentCard = this.cards[i]


			console.log("this is the current card", this.currentCard)

			this.cardColor = this.cards[i].color

			if (this.cards[i].color === 'white') {
				$div.text('javaScript')
				$div.css({
					'justify-content': 'center',
					'align-items': 'center',
				})
			}
			else if (this.cards[i].color === 'yellow') {
				$div.text('CSS')
				$div.css({
					'justify-content': 'center',
					'align-items': 'center',
				})
			}
			else if (this.cards[i].color === "blue") {
				$div.text('HTML')
				$div.css({
					'justify-content': 'center',
					'align-items': 'center',
					'color': 'white'
				})
			}





		}
						$cardDisplay.append($div)
			$cardDisplay.append($giveMeACard)


	},

	createPlayer1: function(playersName) {

		const newPlayer = new Player(playersName)

		this.player1.name = newPlayer


		let $player2Icon = $('#player1Icon')

		let $player2IconAnime = $('.animate')
		$player2IconAnime.css('background-color', 'black')

		$player2Icon.append($player2IconAnime)

		$('.animate').css('background-color', 'red')

		this.printPlayer1()

	},

	createPlayer2: function(playersName) {

		const newPlayer = new Player(playersName)

		this.player2.name = newPlayer

		let $player2IconAnime = $('.animate')
		$player2IconAnime.css('background-color', 'black')

		this.printPlayer2()

	},

	printPlayer1: function() {
		const $div = $('#printPlayer1Name')
		$div.text("")


		const $pName = $("<p></p>")
		const $pScore = $("<p></p>")

		$pName.text(`Name: ${this.player1.name.playersName}`)

		$pScore.text("Score:")

		$div.append($pName)
		$div.append($pScore)

		
	},

	printPlayer2: function() {
		const $div = $('#printPlayer2Name')
		$div.text("")


		const $p = $("<p></p>")
		const $pScore = $("<p></p>")

		$p.text(`Name: ${this.player2.name.playersName}`)

		$pScore.text("Score:")

		$div.append($p)
		$div.append($pScore)



	},

	createPlayerIcon: function() {
		const $div = $('<div></div>').addClass('animate')

		$(document).ready(function() {

			setInterval(function (){
				$div.fadeOut(2000);
				$div.fadeIn(2000);
			}, 2000); 

		})

		$('body').append($div)


	},

	movePlayers: function() {
	},

	startGame: function() {
		this.createSquares()
		this.createPlayer1()
		this.createPlayer2()
		// this.createCards()
		this.movePlayers()


	}

}



app.startGame()


$('#players1Form').on('submit', (event) => {

	event.preventDefault()

	const $player1 = $('#player1').val()

	$('#players1Form').trigger('reset')
	$('#players1Form').hide()

	app.createPlayer1($player1)
	app.createPlayerIcon()
})

$('#players2Form').on('submit', (event) => {

	event.preventDefault()

	const $player2 = $('#player2').val()

	$('#players2Form').trigger('reset')

	$('#players2Form').hide()

	app.createPlayer2($player2)
	app.createPlayerIcon()
})



$('#give-me-card').on('click', (event) => {

	app.createCards()

})


























