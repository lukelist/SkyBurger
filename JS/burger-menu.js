class BurgerMenu {

    constructor() {
        this.burgerImg1
        this.burgerImg2
        this.burgerImg3
        this.burgerImg4
        this.trinkgeld = 0
        this.patty
        this.cheese
        this.tomato
        this.pickle
        this.lettuce
        this.topBun

    }

    preload() {
        this.burgerImg1= loadImage("./Assets/Burgers/MeatTowerBurger.png");
        this.burgerImg2= loadImage("./Assets/Burgers/BaconCheeseburger.png");
        this.burgerImg3= loadImage("./Assets/Burgers/VegetableBurger.png");
        this.burgerImg4= loadImage("./Assets/Burgers/ThePickyEater.png");
        this.patty= loadImage("./Assets/Burgers/patty.png");
        this.cheese= loadImage("./Assets/Burgers/cheese.png");
        this.tomato= loadImage("./Assets/Burgers/tomato.png");
        this.pickle= loadImage("./Assets/Burgers/pickle.png");
        this.lettuce= loadImage("./Assets/Burgers/lettuce.png");
        this.topBun= loadImage("./Assets/Burgers/topBun.png");
    }


	draw() {
    rect(1250, 50, 700, 900, 40, 40, 40, 40);
    image(this.burgerImg1, 1460, 100, 200, 200);
    image(this.burgerImg2, 1610, 100, 200, 200);
    image(this.burgerImg3, 1360, 100, 200, 200);
    image(this.burgerImg4, 1560, 100, 200, 200);
    image(this.patty, 1500, 470, 100, 50)
    image(this.cheese, 1500, 520, 100, 50)
    image(this.tomato, 1500, 570, 100, 50)
    image(this.pickle, 1500, 620, 100, 50)
    image(this.lettuce, 1500, 675, 100, 50)
    image(this.topBun, 1500, 720, 100, 50)

    textFont('Courier New', 72)
    text('Order up!', 1400, 400);
    textFont('Courier New', 32)
    text('1 x', 1400, 500);
    text('1 x', 1400, 550);
    text('1 x', 1400, 600);
    text('1 x', 1400, 650);
    text('1 x', 1400, 700);
    text('1 x', 1400, 750);
    textFont('Courier New', 52)
    text('Tip: ', 1400, 900)
    text(this.trinkgeld, 1550, 900)
	}
}

