
let mode;

const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	mode = 0
	createCanvas(2000, 1000)
}

function draw() {
	game.draw()
}
