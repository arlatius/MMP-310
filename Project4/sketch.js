/*
project 4
9/21/2020
*/

//keycode variables
var E = 69;
var W = 87;
var A = 65;
var S = 83;
var D = 68;

var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var LEFT = 37;


//global variables
var kazuhiroIdleL, kazuhiroIdleR, kazuhiroWalkL, kazuhiroWalkR;
var kazuhiroX, kazuhiroY;
var kazuhiro;
var kazuhiroShadowIcon;
var shadow;
var flowerYellow, flowerBlue, FlowerPink, cloud, grass1, grass2,signImg,chestOpen,chestClosed;
var kazuhiroSpeed = 7;
var shadowY;
var textBoxImg;
var font;



var flowerYellowPosition = [
    [50, 400],
    [136, 322],
    [113, 499],
    [197, 455],
    [269, 458],
    [319, 372],
    [396, 402],
    [419, 534],
    [360, 284],
    [488, 484],
    [556, 349],
    [618, 440],
    [701, 502],
    [641, 300],
    [751, 403],
    [857, 468],
    [779, 312],
    [900, 368]
]

var flowerBluePosition = [
    [616, 409],
    [596, 354],
    [591, 256],
    [356, 558],
    [348, 540],
    [763, 370],
    [277, 364]
]

var flowerPinkPosition = [
    [76, 328],
    [172, 291],
    [937, 304],
    [235, 316],
    [26, 378]
]

var grass1Position = [
    [477, 507],
    [229, 414],
    [218, 466],
    [156, 268],
    [627, 476],
    [724, 416],
    [41, 267],
    [735, 448],
    [323, 422],
    [516, 365]
]

var grass2Position = [
    [486, 440],
    [921, 257],
    [65, 424],
    [491, 312],
    [413, 403],
    [284, 272],
]

var cloudPositions = [
    [0, 100],
    [-447, 146],
    [416, 75],
    [800, 50]
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
    signImg = loadImage("../img/Sign.png");
    chestOpen = loadImage("../img/ChestOpen.png");
    chestClosed = loadImage("../img/ChestClosed.png");
    textBoxImg = loadImage("../img/TextBox.png");
    kazuhiro = loadImage("../img/Kazuhiro64.png");
    kazuhiroShadowIcon = loadImage("../img/KazuhiroShadow.png");

    font = loadFont('../Font.ttf');
}

function setup() {
    createCanvas(940, 560);

    imageMode(CENTER); //kazuhirox and kazuhiroy will now refer to the center of the image

    kazuhiroX = width / 2;
    kazuhiroY = height / 2;

}

function sign(msg, x, y) {
    image(signImg, x, y);
    
    //collision btwn player and sign
    if(
        kazuhiroX - kazuhiroIdleL.width/2 < x + signImg.width/2 &&
        kazuhiroX + kazuhiroIdleL.width / 2 > x - signImg.width/2 &&
        kazuhiroY - kazuhiroIdleL.height/2 < y + signImg.height/2 &&
        kazuhiroY + kazuhiroIdleL.height/2 > y - signImg.height/2){
        fill('white');
        strokeWeight(3);
        stroke('black');
        textAlign(CENTER);
        text(msg, x, y);
       }
    

}

function chest(loot, x, y){
    image(chestClosed, x, y);
    
    //collision btw player and chest
    if(
        kazuhiroX - kazuhiroIdleL.width/2 < x +chestClosed.width/2 &&
        kazuhiroX + kazuhiroIdleL.width/2 > x - chestClosed.width/2 &&
        kazuhiroY - kazuhiroIdleL.width/2 < y + chestClosed.width/2 &&
        kazuhiroY + kazuhiroIdleL.width/2 > y + chestClosed.width/2
    ){
       image(chestOpen,x,y);
    stroke('white');
    fill("black");
        strokeWeight(3);
       text(loot,x,y - 20);
       }
}

function textBox(icon,outline,msg){
    image(outline,width/2 - 175,495);
    image(textBoxImg, width / 2, 500);
    
    noStroke();
    textFont(font);
    textSize(10);
    fill("#32222e");
    textAlign(CENTER);
    text(msg, width / 2 - 150, 500 - 30,textBoxImg.width - 20,textBoxImg.height - 30)
    
    /*rectMode(CENTER);
    rect(width/2,500,textBoxImg.width - 30,textBoxImg.height - 30)*/
    
    //rect(width/2 - 240,462, 64,64);
    image(icon,width/2 - 175,495);
    
}


function draw() {
    
    
//-------------------------------------------------------------BACKGROUND DRAWING-------------------------------------------------------------//
    
    
    background('#abfff9'); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible

    //setting
    //loop

    //clouds
    //i = 0 because the first index in an array is 0, i < cloudPositions.length means it will stop adding to i when its reached the number of items in an array
    for (let i = 0; i < cloudPositions.length; i++) {
        image(cloud, cloudPositions[i][0], cloudPositions[i][1]); //cloudpositions[i][0] refers to the first item in the sub array (in this case the x pos) and [i][1] refers to the second (the y)

        cloudPositions[i][0] += 1; //cloud speed
        if (cloudPositions[i][0] >= width + cloud.width) { //
            cloudPositions[i][0] = 0 - cloud.width;
        }
    }
    
    //ground
    fill("#6df7b1");
    noStroke()
    rect(0, 244, width, height - 244);

    //var makes a variable that exists for the rest of the program, let creates a variable that only exists til the end of the associated curly bracket
    //yellow flower
    for (let i = 0; i < flowerYellowPosition.length; i++) {
        image(flowerYellow, flowerYellowPosition[i][0], flowerYellowPosition[i][1]);
    }

    //blue flower
    for (let i = 0; i < flowerBluePosition.length; i++) {
        image(flowerBlue, flowerBluePosition[i][0], flowerBluePosition[i][0]);
    }

    //pink flower
    for (let i = 0; i < flowerPinkPosition.length; i++) {
        image(flowerPink, flowerPinkPosition[i][0], flowerPinkPosition[i][1]);
    }

    //grass1
    for (let i = 0; i < grass1Position.length; i++) {
        image(grass1, grass1Position[i][0], grass1Position[i][1]);
    }

    //grass2
    for (let i = 0; i < grass2Position.length; i++) {
        image(grass2, grass2Position[i][0], grass2Position[i][1]);
    }
    
    //signs
    //refers to the sign function 
    sign("Start here!", 100, height / 2);
    sign("Sign 2", 295, 382);
    sign("Sign 3", 596, 366);
    
    
//-------------------------------------------------------------MOVEMENT VARIABLES-------------------------------------------------------------//
    
    
    //logic + events
    var shadowY = kazuhiroY + 55
    var kazuhiroIsWalking = false;
    var state = 'idle';
    var state = 'left';
    var state = 'right';
    



    if (state == 'idle') {
        image(kazuhiroIdleL)
    } else if (state == 'left') {
        image(kazuhiroWalkL)
    } else if (state == 'right') {
        image(kazuhiroWalkR)
    }

    
//-------------------------------------------------------------MOVEMENT CONTROLS-------------------------------------------------------------//

    
    if (keyIsDown(W) || keyIsDown(UP)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        state = 'left';

    }

    if (keyIsDown(S) || keyIsDown(DOWN)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroY += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        state = 'right';
    }

    if (keyIsDown(A) || keyIsDown(LEFT)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX -= kazuhiroSpeed;
        kazuhiroIsWalking = true;
        state = 'left';
    }

    if (keyIsDown(D) || keyIsDown(RIGHT)) {
        //background(200); //putting the bg here redraws it every frame so the frames of the transparent gif arent visible
        kazuhiroX += kazuhiroSpeed;
        kazuhiroIsWalking = true;
        state = 'right';
    }


//-------------------------------------------------------------DRAWING KAZUHIRO-------------------------------------------------------------//    
    
    
    image(shadow, kazuhiroX, shadowY);

    if (state == 'left' && kazuhiroIsWalking === true) {
        image(kazuhiroWalkL, kazuhiroX, kazuhiroY);

    }
    if (state == 'right' && kazuhiroIsWalking === true) {
        image(kazuhiroWalkR, kazuhiroX, kazuhiroY);

    }
    if (kazuhiroIsWalking === false) {
        image(kazuhiroIdleL, kazuhiroX, kazuhiroY);

    }

    
//-------------------------------------------------------------OUT OF BOUNDS BORDERS-------------------------------------------------------------//

    
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

    
//-------------------------------------------------------------OTHER STUFF?-------------------------------------------------------------
    
    textBox(kazuhiro,kazuhiroShadowIcon, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan rutrum dui in euismod. Ut tincidunt eget tortor interdum semper. Praesent vel euismod nibh. Morbi sem odio, fermentum vitae ultrices quis, aliquam ac ipsum. Proin");
    
    chest("potion", 846, 414);

//-------------------------------------------------------------REFERENCE TEXT-------------------------------------------------------------//


    var canvasWidth = width;
    var canvasHeight = height;

    stroke('white');
    fill("black");
    textFont('helvetica')
    strokeWeight(3);
    textSize(15);

    text('mouseX:' + round(mouseX), canvasWidth - 100, 15);
    text('mouseY:' + round(mouseY), canvasWidth - 100, 30);
    text('canvas size: ' + width + ', ' + height, canvasWidth - 100, 45);
    text('keycodes: ' + `${key} ${keyCode}`, canvasWidth - 100, 60);
    text('W:87', canvasWidth - 55, 80);
    text('A:65', canvasWidth - 85, 100);
    text('S:83', canvasWidth - 55, 120);
    text('D:68', canvasWidth - 20, 100);


    text('kazuhiro position: ' + kazuhiroX + ', ' + kazuhiroY, 100, 20);





}

