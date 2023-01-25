

class Background {
	constructor(){this.x = 0, this.y=0}
	
	draw() {
    
		image(game.backgroundImages[0].src, 0, 0, width, height)
		image(game.backgroundImages[1].src, 0, 0, width, height)
		image(game.backgroundImages[2].src, this.x*4, this.y, width, height)
		image(game.backgroundImages[2].src, this.x*4+width, this.y, width, height)
		image(game.backgroundImages[3].src, this.x*1.5, this.y, width, height)
		image(game.backgroundImages[3].src, this.x*1.5+width, this.y, width, height)
		image(game.backgroundImages[4].src, this.x, 0, width, height)	
		image(game.backgroundImages[4].src, this.x+width, 0, width, height)

		//movement to clouds
this.x -= 0.2
if (this.x <= -width) this.x = 0
	}
}