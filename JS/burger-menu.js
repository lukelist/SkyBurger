class BurgerMenu {

    constructor() {
        this.burgerImg1
        this.burgerImg2
        this.burgerImg3
        this.burgerImg4
        this.trinkgeld = 0

    }

    preload() {
        this.burgerImg1= loadImage("./Assets/Burgers/MeatTowerBurger.png");
        this.burgerImg2= loadImage("./Assets/Burgers/BaconCheeseburger.png");
        this.burgerImg3= loadImage("./Assets/Burgers/VegetableBurger.png");
        this.burgerImg4= loadImage("./Assets/Burgers/ThePickyEater.png");
    }


	draw() {
    rect(1250, 50, 700, 900, 40, 40, 40, 40);

    image(this.burgerImg1, 1460, 100, 200, 200);
    image(this.burgerImg2, 1610, 100, 200, 200);
    image(this.burgerImg3, 1360, 100, 200, 200);
    image(this.burgerImg4, 1560, 100, 200, 200);

    textFont('Courier New', 72)
    text('Order up!', 1400, 400);
    textFont('Courier New', 52)
    text('1 x patty', 1400, 500);
    text(this.trinkgeld, 1400, 600)
	}
}