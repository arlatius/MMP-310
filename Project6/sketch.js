/*------------------------X------------------------*/

/*
project 6
object oriented version
classes and objects
*/

/*------------------------IMAGE VARIABLES------------------------*/

var kazuhiroIdle, kazuhiroWalkL, kazuhiroWalkR, KazuhiroJump; //Hiro
var flowerYellowImg, flowerBlueImg, FlowerPinkImg, cloudImg, grass1Img, grass2Img, signImg; //Setting
var textBoxImg, hiroIcon, font; //UI
var beeImage; //Enemies

/*------------------------OBJECT VARIABLES------------------------*/

var flowerYellow = [];
var cloud = [];
var portals = [];
var player;


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





function preload() {

    //hiro
    kazuhiroIdle = loadImage("../img/KazuhiroIdle32.gif");
    kazuhiroWalkL = loadImage("../img/KazuhiroWalk32.gif");
    kazuhiroWalkR = loadImage("../img/KazuhiroWalk32Right.gif");
    KazuhiroJump = loadImage("../img/KazuhiroJump.png");

    //setting
    flowerYellowImg = loadImage("../img/FlowerYellow.png");
    flowerBlueImg = loadImage("../img/FlowerBlue.png");
    flowerPinkImg = loadImage("../img/FlowerPink.png");
    cloudImg = loadImage("../img/Cloud.png");
    grass1Img = loadImage("../img/Grass1.png");
    grass2Img = loadImage("../img/Grass2.png");
    signImg = loadImage("../img/Sign.png");

    //UI
    textBoxImg = loadImage("../img/TextBox.png");
    hiroIcon = loadImage("../img/Kazuhiro64.png");


    //Enemies
    beeImage = loadImage("../img/Bee.png");

}

function setup() {
    createCanvas(940, 560);
    imageMode(CENTER);

    flowerYellow.push(new GameObject(flowerYellowImg, 100, 200));
    cloud.push(new Cloud(100, 100));
    
    portals.push(new Portal("Easy", 300, 300, "easy"));
    portals.push(new Portal("Medium", 500, 300, "medium"));
    portals.push(new Portal("Hard", 700, 300, "Hard"));
    
    player = new Player(width / 2, height / 2);

}

function draw() {
    background('#abfff9');
    
    /*------------------------Keyboard Events------------------------*/
    
    player.isWalking = false;
    
    if (keyIsDown(W) || keyIsDown(UP)) {
       player.y -= player.speed;
        player.isWalking = true;
    }

    if (keyIsDown(S) || keyIsDown(DOWN)) {
        player.y += player.speed;
        player.isWalking = true;
    }

    if (keyIsDown(A) || keyIsDown(LEFT)) {
        player.x -= player.speed;
        player.isWalking = true;
    }

    if (keyIsDown(D) || keyIsDown(RIGHT)) {
        player.x += player.speed;
        player.isWalking = true;
    }


    //draws individual
    for (let i = 0; i < flowerYellow.length; i++) {
        flowerYellow[i].draw();
    }

    for (let i = 0; i < cloud.length; i++) {
        cloud[i].draw(); //draws from gameobjects
        cloud[i].update(); //adds movement from cloud
    }
    
    for (let i = 0; i < portals.length; i++) {
        portals[i].draw();
        
        if (portals[i].collide(player)){
            portals[i].drawText();
    }
        if(keyIsDown(E)){
            text("scene change",100,100); //will be changed later obv
        }
    }

    player.draw();
        
        
        
        
        
        
        
        
        
        
        
        
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
}
