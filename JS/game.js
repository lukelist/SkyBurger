class Game {
	constructor() {
		this.background = new Background()
		this.backgroundImages
		this.burgerMenu = new BurgerMenu()
		this.bunImage
		this.bunPlayer = new BunPlayer()
		this.burgerPartsImage
		this.parts = []
		
		this.partsImageCoordinate =[
			{
			ingredient : "topBun",
			sx: 11,
			sy: 100,
			sWidth: 39,
			sHeight: 14
		},
		{
			ingredient : "patty",
			sx: 8,
			sy: 36,
			sWidth: 46,
			sHeight: 18
		},
		{
			ingredient : "cheese",
			sx: 8,
			sy: 86,
			sWidth: 48,
			sHeight: 13
		},
		{
			ingredient : "lettuce",
			sx: 197,
			sy: 2,
			sWidth: 52,
			sHeight: 20
		},
		{
			ingredient : "tomato",
			sx: 140,
			sy: 56,
			sWidth: 42,
			sHeight: 16
		},
		{
			ingredient : "pickle",
			sx: 202,
			sy: 53,
			sWidth: 42,
			sHeight: 12
		}
		]
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("./Assets/Clouds 5/1.png")},
			{ src: loadImage("./Assets/Clouds 5/2.png")},
			{ src: loadImage("./Assets/Clouds 5/3.png")},
			{ src: loadImage("./Assets/Clouds 5/4.png")},
			{ src: loadImage("./Assets/Clouds 5/5.png")},
		]
		this.bunImage = loadImage("./Assets/Burgers/BareBuns.png")
		this.burgerMenu.preload()
		this.burgerPartsImage= loadImage("./Assets/Burgers/burger_parts.png")


	}

	draw() {
		clear()
		this.background.draw()
		this.burgerMenu.draw()
		this.bunPlayer.draw()

		if (frameCount % 50 === 0){

			var randomIndex = Math.floor(Math.random()*this.partsImageCoordinate.length);

			let part= new Part(this.burgerPartsImage,
				this.partsImageCoordinate[randomIndex].sx, 
				this.partsImageCoordinate[randomIndex].sy, 
				this.partsImageCoordinate[randomIndex].sWidth, 
				this.partsImageCoordinate[randomIndex].sHeight, 
				this.partsImageCoordinate[randomIndex].ingredient)
			this.parts.push(part)
		}
		this.parts.forEach(part =>{
			part.draw()
		})

		this.parts = this.parts.filter(part => {
			if (part.y > 1200 + part.height){
				return false
			} else {return true}
		})
		
	}
}
