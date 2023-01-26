class Mode2Won {
	constructor(){this.x = 0, this.y=0}
	
	draw() {

    
		image(game.mode2wonImages[0].src, 0, 0, width, height)
		image(game.mode2wonImages[1].src, 0, 0, width, height)
		image(game.mode2wonImages[2].src, this.x*4, this.y, width, height)
        image(game.mode2wonImages[2].src, this.x*4+width, this.y, width, height)
		image(game.mode2wonImages[3].src, this.x*1.5, this.y, width, height)
        image(game.mode2wonImages[3].src, this.x*1.5+width, this.y, width, height)

	
		textFont('Courier New', 72)
		text('WINNER WINNER BURGER DINNER!', 320, 500);
		textFont('Courier New', 52)
		text('PRESS ENTER TO START LEVEL 2', 100, 800);
		//movement to clouds
	this.x -= 0.2
if (this.x <= -width) this.x = 0
	}
}
