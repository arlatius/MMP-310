class PlatformScene {
    constructor(bgColor, minObstacles, maxObstacles) {
        this.bgColor = bgColor;
        this.minObstacles = minObstacles;
        this.maxObstacles = maxObstacles;

        this.obstacles = [];

        this.groundY = 400;
        this.gravity = 2;
    }

    setup(nextScene) {
        player.x = 200;
        player.y = height - this.groundY;
        player.isWalking = true;

        this.obstacles = []; //empties the array

        var n = random(this.minObstacles, this.maxObstacles);
        for (let i = 0; i < n; i++) {
            let x = random(width / 2, width) + i * width / 2;
            let obstacle = new Bee(x,  this.groundY);
            this.obstacles.push(obstacle);
        }
        if (nextScene) this.nextScene = nextScene
    }

    draw() {
        background(this.bgColor);

        //ground
        fill("#6df7b1");
        noStroke()
        rect(0, this.groundY, width, height - this.groundY);

        //jumping and falling (use space)


        //hitting ground
        if (player.y < this.groundY) {
            player.ySpeed += this.gravity;
        } else {
            player.ySpeed = 0;
            player.isJumping = false;
        }

        //jumping
        if (!player.isJumping && keyIsDown(32)) {
            player.ySpeed = -25;
            player.isJumping = true;
        }
        player.y += player.ySpeed;
        player.draw();

        for (let i = 0; i < this.obstacles.length; i++) {
            let obstacle = this.obstacles[i];
            obstacle.update();
            obstacle.draw();
            
            if (obstacle.collide(player)) {
                changeScene('lose', currentScene);
            }
            if (i == this.obstacles.length - 1 && player.x > obstacle.x) {
                changeScene('win', this.nextScene);
            }
        }
    }
}
