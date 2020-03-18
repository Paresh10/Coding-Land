
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

	createSquares: function () {

		// create 100 squares
		for (let i = 0; i < 100; i++) {

			const sq = new Square()
			this.squares.push(sq)

		}
		this.printSquares()
	},

	printSquares: function () {

		const $squaresContainer = $('.squares')

		

		for (let i = 0; i < this.squares.length; i++) {

			const $div = $(`<div data-num-square = "${i}" ></div>`).addClass('square')

			// if (i % 5 === 0 ) {

			// 	$div.text("javaScript")
			// }

			

			$div.css('background-color', this.squares[i].color)

			$squaresContainer.append($div)
		}
	},

	createPlayer1: function(playersName) {

		const newPlayer = new Player(playersName)

		this.player1.name = newPlayer
		console.log(newPlayer)
		this.printPlayer1()
		

	},

	createPlayer2: function(playersName) {

		const newPlayer = new Player(playersName)

		this.player2.name = newPlayer
		console.log(newPlayer)
		this.printPlayer2()

	},

	printPlayer1: function() {
		const $div = $('#printPlayer1Name')
		$div.text("")


		const $pName = $("<p></p>")
		const $pScore = $("<p></p>")

		$pName.text(`Name: ${this.player1.name.playersName}`)

		$pScore.text("Score:")

		console.log($pName.text())

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

		console.log($p.text())

		$div.append($p)
		$div.append($pScore)

	},

	startGame: function() {
		this.createSquares()
		this.createPlayer1()
		this.createPlayer2()


	}

}



app.startGame()


$('#players1Form').on('submit', (event) => {

	event.preventDefault()

	const $player1 = $('#player1').val()

	$('#players1Form').trigger('reset')
	$('#players1Form').hide()

	app.createPlayer1($player1)
})

$('#players2Form').on('submit', (event) => {

	event.preventDefault()

	const $player2 = $('#player2').val()

	$('#players2Form').trigger('reset')

	$('#players2Form').hide()
	app.createPlayer2($player2)
})

































