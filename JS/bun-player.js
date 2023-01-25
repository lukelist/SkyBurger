class BunPlayer {
	constructor() {
		this.width = 280
		this.height = 95
		this.x = 0
		this.y = 800
		this.image
	}

	
		draw() {

		let xc = constrain(mouseX-this.width/2, 0, 1000);
		this.x = xc
		image(game.bunImage, this.x, this.y, this.width, this.height)
	}

}

