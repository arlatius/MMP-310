class MapScene {
    constructor() {
        this.background = [];
        this.cloud = [];
        this.portals = [];

        //pushes location for each obect into the index




    }



    draw() {

        background('#abfff9');
        fill("#6df7b1");
        noStroke()
        rect(0, 244, width, height - 244);



        for (let i = 0; i < this.background.length; i++) {
            this.background[i].draw();
        }

        for (let i = 0; i < this.cloud.length; i++) {
            this.cloud[i].draw(); //draws from gameobjects
            this.cloud[i].update(); //adds movement from cloud
        }



        /*------------------------Keyboard Events------------------------*/

        //movement
        player.isWalking = false;
        
        if (keyIsDown(W) || keyIsDown(UP)) {
            player.y -= player.speed;
            player.animationState = 'left';
            player.isWalking = true;
        }
        if (keyIsDown(S) || keyIsDown(DOWN)) {
            player.y += player.speed;
            player.animationState = 'right';
            player.isWalking = true;
        }
        if (keyIsDown(A) || keyIsDown(LEFT)) {
            player.x -= player.speed;
            player.animationState = 'left';
            player.isWalking = true;
        }
        if (keyIsDown(D) || keyIsDown(RIGHT)) {
            player.x += player.speed;
            player.animationState = 'right';
            player.isWalking = true;
        }

        
        //draw portal after last player update
        
	/* draw portals after last player update, before player draws */
		let enterPortal;
		for (let i = 0; i < this.portals.length; i++) {
			this.portals[i].draw();

			// detect collision between portal and player
			if (this.portals[i].collide(player)) {
				this.portals[i].drawText();


            if (keyIsDown(E)) {
                enterPortal = this.portals[i].destination;
                text("scene change", 100, 100); //will be changed later obv
            }
        }
        }

if (enterPortal) {
			changeScene(enterPortal, currentScene);
		}
        
        player.draw();






    }

}
