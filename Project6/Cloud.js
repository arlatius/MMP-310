class Cloud extends GameObject {
    
    constructor(x,y){
        //super refers to the object this object extends
        super(cloudImg, x, y);
    }
    
    update() {
        this.x+=1;
        if(this.x > width + this.width / 2){
            this.x = -this.width/2;
        }

    }
}