class Mode3Over {
	constructor(){this.x = 0, this.y=0}
	
	draw() {

		image(game.mode3overImages[0].src, 0, 0, width, height)
		image(game.mode3overImages[1].src, 0, 0, width, height)
		image(game.mode3overImages[2].src, this.x*4, this.y, width, height)
        image(game.mode3overImages[2].src, this.x*4+width, this.y, width, height)
        image(game.mode3overImages[2].src, this.x*4, this.y, width, height)
        image(game.mode3overImages[2].src, this.x*4+width, this.y, width, height)
        image(game.mode3overImages[3].src, 0, 0, width, height)

	
		
        fill('white') 
        textFont('Courier New', 72)
		text('GAME OVER', 320, 500);
		textFont('Courier New', 52)
		text('PRESS ENTER TO START AGAIN', 100, 800);
		//movement to clouds
	this.x -= 0.2
if (this.x <= -width) this.x = 0
	}
}