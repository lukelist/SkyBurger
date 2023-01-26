class ModeZero {
	constructor(){this.x = 0, this.y=0}
	
	draw() {

    
		image(game.modeZeroImages[0].src, 0, 0, width, height)
		image(game.modeZeroImages[1].src, this.x*1.5, this.y, width, height)
        image(game.modeZeroImages[1].src, this.x*1.5+width, this.y, width, height)
		image(game.modeZeroImages[2].src, this.x, 0, width, height)
        image(game.modeZeroImages[2].src, this.x+width, 0, width, height)
		image(game.modeZeroImages[3].src, this.x*3, this.y, width, height)
        image(game.modeZeroImages[3].src, this.x*3+width, this.y, width, height)
		image(game.modeZeroImages[3].src, this.x*3, this.y, width, height)
        image(game.modeZeroImages[3].src, this.x*3+width, this.y, width, height)
		image(game.modeZeroImages[4].src, 0, 0, width, height)
		image(game.modeZeroImages[5].src, 0, 0, width, height)

		let intro = 'Order up! Hungry customers need their burger prepared correctly. Catch the ingredients in the correct order as they fall from the sky, but avoid the fruit!'
		textFont('Courier New', 72)
		text('INSTRUCTIONS', 100, 200);
		textFont('Courier New', 52)
		text(intro, 100, 400, 1400, 400);
		textFont('Courier New', 52)
		text('PRESS ENTER TO START', 100, 800);
		//movement to clouds
	this.x -= 0.2
if (this.x <= -width) this.x = 0
	}
}