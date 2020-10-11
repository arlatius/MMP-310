class Player extends GameObject {
    constructor(x, y) {
        super(kazuhiroIdle, x, y);
        this.idle = kazuhiroIdle;
        this.walkL = kazuhiroWalkL;
        this.walkR = kazuhiroWalkR;
        this.jump = KazuhiroJump;

        this.isWalking = false;
        this.isJumping = false;
        
        this.speed = 7;
    }
    draw() {
        if (this.isWalking) {
            image(this.walkL, this.x, this.y);
        } else if (this.isJumping) {
            image(this.jump, this.x, this.y);
        } else {
            image(this.idle, this.x, this.y);
        }
    }
}
