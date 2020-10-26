class End extends MapScene {
    constructor() {
        super();

        for (let x = 0; x < width; x += 50) {
            for (let y = height / 2; y < height; y += 100) {
                if (y < height / 2 + height / 2) {
                    let rock = new GameObject(rockImg, x + random(-50, 50), y + random(-50, 50));
                    this.background.push(rock);
                }

            }
        }


    }

    setup() {

        
        let snakePortal = new Portal("Fight the snakes!", width - 200, height / 2, 'hard');
		this.portals.push(snakePortal);
    }
}
