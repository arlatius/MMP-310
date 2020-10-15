class MapScene {
    constructor() {
        this.background = [];
        this.cloud = [];
        this.portals = [];

        //pushes location for each obect into the index
        this.background.push(new GameObject(flowerBlueImg, 100, 100));
        this.background.push(new GameObject(flowerYellowImg, 200, 200));
        this.cloud.push(new Cloud(100, 100));
        this.portals.push(new Portal("Easy", 300, 300, "easy"));
        this.portals.push(new Portal("Medium", 500, 300, "medium"));
        this.portals.push(new Portal("Hard", 700, 300, "Hard"));
    }

    setup() {

    }

    draw() {

        background('#abfff9');
        
        for (let i = 0; i< this.background.length;i++) {
            this.background[i].draw;
        }

        for (let i = 0; i < this.cloud.length; i++) {
            this.cloud[i].draw(); //draws from gameobjects
            this.cloud[i].update(); //adds movement from cloud
        }

        for (let i = 0; i < this.portals.length; i++) {
            this.portals[i].draw();

            if (this.portals[i].collide(player)) {
                this.portals[i].drawText();
            }
            if (keyIsDown(E)) {
                text("scene change", 100, 100); //will be changed later obv
            }
        }
    }

}