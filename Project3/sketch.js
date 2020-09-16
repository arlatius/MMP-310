/*
project 3
9/16/2020
*/

//global variables
var kazuhiroIdleL, kazuhiroIdleR, kazuhiroWalkL, kazuhiroWalkR
var kazuhiroX, kazuhiroY;
var shadow;
var flowerYellow, flowerBlue,FlowerPink, cloud,grass1,grass2;
var kazuhiroSpeed = 7;
var shadowY;

var flowerX = [50,136,113,197,269,319,396,419,360,488,556,618,701,641,751,857,779,900];
var flowerY = [400,322,499,455,458,372,402,534,284,484,349,440,502,300,403,468,312,368];

var flowerBluePosition = [
    [616,409],
    [596,354],
    [591,256],
    [356,558],
    [348,540],
    [763,370],
    [277,364]
]

var flowerPinkPosition = [
    [76,328],
    [172,291],
    [937,304],
    [235,316],
    [26,378]
]

var grass1Position = [
    [477,507],
    [229,414],
    [218,466],
    [156,268],
    [627,476],
    [724,416],
    [41,267],
    [735,448],
    [323,422],
    [516,365]
]

var grass2Position = [
    [486,440],
    [921,257],
    [65,424],
    [491,312],
    [413,403],
    [284,272],
]

var cloudPositions =[
    [0,100],
    [-447,146],
    [416,75],
    [800,50]
];

function preload() {
    kazuhiroIdleL = loadImage("../img/KazuhiroIdle32.gif");
    kazuhiroIdleR = loadImage("../img/KazuhiroIdle32Right.gif");
    kazuhiroWalkL = loadImage("../img/KazuhiroWalk32.gif");
    kazuhiroWalkR = loadImage("../img/KazuhiroWalk32Right.gif");
    shadow = loadImage("../img/Shadow32.png");
    flowerYellow = loadImage("../img/FlowerYellow.png");
    flowerBlue = loadImage("../img/FlowerBlue.png");
    flowerPink = loadImage("../img/FlowerPink.png");
    cloud = loadImage("../img/Cloud.png");
    grass1 = loadImage("../img/Grass1.png");
    grass2 = loadImage("../img/Grass2.png");
}

function setup() {
    createCanvas(940, 560);

    imageMode(CENTER); //kazuhirox and kazuhiroy will now refer to the center of the image

    kazuhiroX = width / 2;
    kazuhiroY = height / 2;

}

function draw() {
    background('#abfff9'); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
    
//setting
    //loop
    
//clouds
    //i = 0 because the first index in an array is 0, i < cloudPositions.length means it will stop adding to i when its reached the number of items in an array
    for (let i = 0; i < cloudPositions.length; i++){
        image(cloud, cloudPositions[i][0], cloudPositions[i][1]); //cloudpositions[i][0] refers to the first item in the sub array (in this case the x pos) and [i][1] refers to the second (the y)
        
        cloudPositions[i][0] += 1; //cloud speed
        if(cloudPositions[i][0] >= width + cloud.width){ //
            cloudPositions[i][0] = 0 - cloud.width;
        }
    }
fill("#6df7b1");    
noStroke()
rect(0,244,width,height - 244);    
    
    //var makes a variable that exists for the rest of the program, let creates a variable that only exists til the end of the associated curly bracket
    //yellow flower
for(let i = 0; i < flowerX.length; i++) {
    image(flowerYellow, flowerX[i],flowerY[i]);
}
    
    //blue flower
    
    for(let i = 0; i < flowerBluePosition.length; i++){
        image(flowerBlue,flowerBluePosition[i][0],flowerBluePosition[i][0]);
    }
    
    //pink flower
    for(let i = 0; i < flowerPinkPosition.length; i++){
        image(flowerPink,flowerPinkPosition[i][0],flowerPinkPosition[i][1]);
    }
    
   //grass1
    for(let i =0; i<grass1Position.length;i++){
        image(grass1,grass1Position[i][0],grass1Position[i][1]);
    }
    
    //grass2
    for(let i= 0; i < grass2Position.length;i++){
        image(grass2,grass2Position[i][0],grass2Position[i][1]);
    }
    
    
    
    
    
    
    
    
    
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
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = true;

    }

    if (keyIsDown(S) || keyIsDown(DOWN)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = false;
    }

    if (keyIsDown(A) || keyIsDown(LEFT)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = true;
    }

    if (keyIsDown(D) || keyIsDown(RIGHT)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        kazuhiroIsLeft = false;
    }



    if (kazuhiroIsLeft === true && kazuhiroIsWalking === true) {
        //background(200);
        image(shadow, kazuhiroX, shadowY);
        image(kazuhiroWalkL, kazuhiroX, kazuhiroY);
        
    }
    if (kazuhiroIsLeft === false && kazuhiroIsWalking === true) {
        //background(200);
        image(shadow, kazuhiroX, shadowY);
        image(kazuhiroWalkR, kazuhiroX, kazuhiroY);
        
    }
    if (kazuhiroIsWalking === false) {
        //background(200);
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
    if (kazuhiroY <= 214) {
        if (keyIsDown(W) || keyIsDown(UP)) {
            kazuhiroY = 214;
        }
    }
    //down
    if (kazuhiroY >= 490) {
        if (keyIsDown(S) || keyIsDown(DOWN)) {
            kazuhiroY = 490;
        }
    }
    

    


    //reference text;
    var canvasWidth = width;
    var canvasHeight = height;

    stroke('white');
    fill("black");
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
    text('clouds: ' + cloudPositions.length, 10, 60);
    text('flowers: ' + flowerX.length + ', ' + flowerBluePosition.length + ', ' + flowerPinkPosition.length, 10, 80);




}
