
class Bee extends GameObject {
	constructor(x, y) {
		super(beeImage, x, y);
		this.speed = 10;
	}

	update() {
		this.x -= this.speed;
	}
}