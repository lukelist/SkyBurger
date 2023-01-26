let order = 0

class Part {
	constructor(image, sx, sy, sWidth, sHeight, ingredient) {
		this.ingredient = ingredient
		this.image = image
		this.x = random(0, 1000)
		this.y = 0
		this.width = 170
		this.height = 85
		this.velocity = 5
		this.sx = sx
		this.sy = sy
		this.sWidth = sWidth
		this.sHeight = sHeight
		this.velocityY = 5
		this.OcurrencePatty= false 
		this.OcurrenceCheese= false 
		this.OcurrenceTomato= false 
		this.OcurrencePickle= false 
		this.OcurrenceLettuce= false 
		this.OcurrenceTopBun= false
	}

	

    draw(){
        image(this.image, this.x, this.y, this.width, this.height, this.sx, this.sy, this.sWidth, this.sHeight)
		this.y += this.velocityY
		//image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
		
		// Get the middle of the burger part
		let partX = this.x + this.width / 2
		let partY = this.y + this.height / 2

		// Get the middle of the bun-player
		let bunX = game.bunPlayer.x + game.bunPlayer.width / 2;
		let bunY = game.bunPlayer.y + game.bunPlayer.height / 2;
		
		if (dist(partX, partY, bunX, bunY) <= 90){

			this.x = game.bunPlayer.x + game.bunPlayer.width -225

			if(this.ingredient ==="patty" && this.OcurrencePatty== false&& order == 0){
				this.y = 800
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrencePatty = true
				order+=1
			};

			if (this.ingredient ==="cheese" && this.OcurrenceCheese == false && order == 1){
				this.y = 790
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrenceCheese = true
				order+=1
			};

			if (this.ingredient ==="tomato" && this.OcurrenceTomato == false && order == 2){
				this.y = 788
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrenceTomato = true
				order+=1
			};
			if (this.ingredient ==="pickle" && this.OcurrencePickle == false && order == 3){
				this.y = 755
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrencePickle = true
				order+=1
			};
			if (this.ingredient ==="lettuce" && this.OcurrenceLettuce == false && order == 4){
				this.y = 760
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrenceLettuce = true
				order+=1
			};
			if (this.ingredient ==="topBun" && this.OcurrenceTopBun == false && order == 5){
				this.y = 720
				this.velocityY = 0
				game.burgerMenu.trinkgeld += 100
				this.OcurrenceTopBun = true
				order+=1
			};

		 	if (game.burgerMenu.trinkgeld == 600){

			setTimeout(()=> {mode=2}, 3000)

			}
			
		}
		else {
			this.velocityY = 5

    }

} 
}