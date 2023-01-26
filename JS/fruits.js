class Fruits {

    constructor(image){
        this.image = image
		this.x = random(0, 1000)
		this.y = 0
		this.width = 50
		this.height = 50
		this.velocity = 5
    }


    draw(){
        this.y += this.velocity
		image(game.fruitsImages, this.x, this.y, this.width, this.height)

        var randomFruit = Math.floor(Math.random()*game.fruitsImages.length);
        
    }
    
}