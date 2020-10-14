class Player extends GameObject {
    constructor(x, y) {
        super(kazuhiroIdle, x, y);
        this.idle = kazuhiroIdle;
        this.walkL = kazuhiroWalkL;
        this.walkR = kazuhiroWalkR;
        this.jump = KazuhiroJump;

        this.animationState;
        this.isWalking = false;
        this.isJumping = false;

        this.speed = 7;
    }
    draw() {
        
        if (this.animationState == 'left' && this.isWalking) {
            image(this.walkL, this.x, this.y);
        } else if (this.animationState == 'right' && this.isWalking) {
            image(this.walkR, this.x, this.y);
        } else if (this.isWalking == false) {
            image(this.idle, this.x, this.y);
        } else if (this.isJumping) {
            image(this.jump, this.x, this.y);
        } else {
            image(this.idle, this.x, this.y);
        }
    }
}
