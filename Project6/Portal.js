class Portal extends GameObject{
    constructor(message, x, y, destination) {
        super(signImg,x,y);
        this.message = message;
        this.destination = destination;
    }
    
    drawText() {
        fill('white');
        strokeWeight(3);
        stroke('black');
        textAlign(CENTER);
        text(this.message, this.x, this.y);
        
        text("Hit E to play.", this.x, this.y+25);
    }
    
}