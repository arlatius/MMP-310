class Beginning extends MapScene {
    constructor() {
        super();
        
        this.background.push(new GameObject(flowerBlueImg, 136, 296));
        this.background.push(new GameObject(flowerYellowImg, 276, 441));
        this.background.push(new GameObject(flowerPinkImg, 718, 357));
        this.background.push(new GameObject(grass1Img, 590, 249));
        this.background.push(new GameObject(grass2Img, 388, 500));
        this.background.push(new GameObject(flowerBlueImg, 80, 460));
        this.background.push(new GameObject(flowerYellowImg, 200, 200));


        this.cloud.push(new Cloud(100, 100));
        /*this.portals.push(new Portal("Easy", 300, 300, "easy"));
        this.portals.push(new Portal("Medium", 500, 300, "medium"));
        this.portals.push(new Portal("Hard", 700, 300, "Hard"));*/
        
        
        
       let middlePortal = new Portal("Enter the forrest", width - 200, height - 200, "middle");
		this.portals.push(middlePortal);
        
        
        let beePortal = new Portal("Fight the bees",200, height-300,"easy");
        this.portals.push(beePortal);
        
    }
    setup() {
        player.x = width/2;
        player.y = height/2;
    }
}