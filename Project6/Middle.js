class Middle extends MapScene {
    constructor() {
        super();


        for (let x = 0; x < width; x += 100) {
            for (let y = height / 2 + 20; y < height; y += 100) {
                let yellow = new GameObject(flowerYellowImg, x + random(-50, 50), y + random(-50, 50));
                this.background.push(yellow);

                let blue = new GameObject(flowerBlueImg, x + random(-50, 50), y + random(-50, 50));
                this.background.push(blue);

                let pink = new GameObject(flowerPinkImg, x + random(-50, 50), y + random(-50, 50));
                this.background.push(pink);

                let grass1 = new GameObject(grass1Img, x + random(-50, 50), y + random(-50, 50));
                this.background.push(grass1);

                let grass2 = new GameObject(grass2Img, x + random(-50, 50), y + random(-50, 50));
                this.background.push(grass2);
            }
        }


		let endPortal = new Portal("Enter the abyss", width / 2, height - 100, 'end');
		this.portals.push(endPortal);

		let beePortal = new Portal("Fight the bees!", width / 2, height / 2, 'medium');
		this.portals.push(beePortal);
	}

	setup() {
		player.x = width / 4;
		player.y = 300;
	}
}