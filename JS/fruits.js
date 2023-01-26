class Fruits {

    constructor(image){
        this.image = image
		this.x = random(0, 1000)
		this.y = 0
		this.width = 50
		this.height = 50
		this.velocity = 8
    }


    draw(){
        this.y += this.velocity
		image(this.image, this.x, this.y, this.width, this.height)

        // Get the middle of the fruit
		let FruitX = this.x + this.width / 2
		let FruitY = this.y + this.height / 2

		// Get the middle of the bun-player
		let bunX = game.bunPlayer.x + game.bunPlayer.width / 2;
		let bunY = game.bunPlayer.y + game.bunPlayer.height / 2;
		
		if (dist(FruitX, FruitY, bunX, bunY) <= 60){

           setTimeout(()=> {mode=3}, 1000)
    }
    
}
}