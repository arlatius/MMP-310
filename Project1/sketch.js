/*
project 1
9/7/2020
*/

//global variables
var kazuhiroIdleL, kazuhiroIdleR, kazuhiroWalkL, kazuhiroWalkR
var take;
var kazuhiroX, kazuhiroY;
var shadow;
var kazuhiroSpeed = 7;
var shadowY;

function preload() {
    kazuhiroIdleL = loadImage("../img/KazuhiroIdle32.gif");
    kazuhiroIdleR = loadImage("../img/KazuhiroIdle32Right.gif");
    kazuhiroWalkL = loadImage("../img/KazuhiroWalk32.gif");
    kazuhiroWalkR = loadImage("../img/KazuhiroWalk32Right.gif");
    shadow = loadImage("../img/Shadow32.png");
    take = loadImage("../img/take.png");
}

function setup() {
    createCanvas(940, 560);

    imageMode(CENTER); //kazuhirox and kazuhiroy will now refer to the center of the image

    kazuhiroX = width / 2;
    kazuhiroY = height / 2;

}

function draw() {
    background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
    

    //logic + events
    //character movement

    var shadowY = kazuhiroY + 55
    var kazuhiroIsWalking = false;
    var kazuhiroIsLeft = true;
    var W = 87;
    var A = 65;
    var S = 83;
    var D = 68;
    
    var UP = 38;
    var RIGHT = 39;
    var DOWN = 40;
    var LEFT = 37;

    
    

    if (keyIsDown(W) || keyIsDown(UP)) {
        background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = true;

    }

    if (keyIsDown(S) || keyIsDown(DOWN)) {
        background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = false;
    }

    if (keyIsDown(A) || keyIsDown(LEFT)) {
        background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = true;
    }

    if (keyIsDown(D) || keyIsDown(RIGHT)) {
        background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = false;
    }



    if (kazuhiroIsLeft === true) {
        background(200);
        image(shadow, kazuhiroX, shadowY);
        image(kazuhiroWalkL, kazuhiroX, kazuhiroY);
        
    }
    if (kazuhiroIsLeft === false) {
        background(200);
        image(shadow, kazuhiroX, shadowY);
        image(kazuhiroWalkR, kazuhiroX, kazuhiroY);
        
    }
    if (kazuhiroIsWalking === false) {
        background(200);
        image(shadow, kazuhiroX, shadowY);
        image(kazuhiroIdleL, kazuhiroX, kazuhiroY);
        
    }

    /* added the background to each wasd if so that if multiple keys were pressed at once you cant see both animations. It was the only thing i could think of lmao but it worked*/


    //OUT OF BOUNDS
    //left
    if (kazuhiroX <= 23) {
        if (keyIsDown(A) || keyIsDown(LEFT)) {
            kazuhiroX = 23;
        }
    }
    //right
    if (kazuhiroX >= 910) {
        if (keyIsDown(D) || keyIsDown(RIGHT)) {
            kazuhiroX = 910;
        }
    }
    //up
    if (kazuhiroY <= 63) {
        if (keyIsDown(W) || keyIsDown(UP)) {
            kazuhiroY = 63;
        }
    }
    //down
    if (kazuhiroY >= 490) {
        if (keyIsDown(S) || keyIsDown(DOWN)) {
            kazuhiroY = 490;
        }
    }
    
    image(shadow,823, 418);
    image(take,823,363);
    




    //reference text;
    var canvasWidth = width;
    var canvasHeight = height;

    stroke('white');
    strokeWeight(3);
    textSize(15);

    text('mouseX:' + round(mouseX), canvasWidth - 200, 15);
    text('mouseY:' + round(mouseY), canvasWidth - 200, 30);
    text('canvas size: ' + width + ', ' + height, canvasWidth - 200, 45);
    text('keycodes: ' + `${key} ${keyCode}`, canvasWidth - 200, 60);
    text('W:87', canvasWidth - 155, 80);
    text('A:65', canvasWidth - 185, 100);
    text('S:83', canvasWidth - 155, 120);
    text('D:68', canvasWidth - 120, 100);


    text('kazuhiro position: ' + kazuhiroX + ', ' + kazuhiroY, 10, 20);
    text('is kazuhiro walking? ' + kazuhiroIsWalking, 10, 40);




}
