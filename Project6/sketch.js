/*------------------------X------------------------*/

/*
project 6
object oriented version
classes and objects
*/

/*------------------------VARIABLES------------------------*/


//image var
var kazuhiroIdle, kazuhiroWalkL, kazuhiroWalkR, KazuhiroJump; //Hiro
var flowerYellowImg, flowerBlueImg, FlowerPinkImg, cloudImg, grass1Img, grass2Img, signImg, rockImg; //Setting
var textBoxImg, hiroIcon, font; //UI
var beeImage; //Enemies

//scene var
var scenes = {};
var currentScene = 'beginning';

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
    rockImg = loadImage("../img/Rock.png");

    //UI
    textBoxImg = loadImage("../img/TextBox.png");
    hiroIcon = loadImage("../img/Kazuhiro64.png");


    //Enemies
    beeImage = loadImage("../img/Bee.png");

}

function setup() {
    createCanvas(940, 560);
    imageMode(CENTER);


    //this identifies the previously declared variable as a certain object
    player = new Player(width / 2, height / 2);
    scenes.beginning = new Beginning();
    scenes.middle = new Middle();
    scenes.end = new End();
    
    scenes.easy = new PlatformScene('#abfff9',3,6);
    scenes.medium = new PlatformScene('#ff9d4d',6,9);
    scenes.hard = new PlatformScene('#0a1e66',9,12);
    
    scenes.win = new Prompt ("you win", "hit enter to return to map");
    scenes.lose = new Prompt ("you lose", "hit enter to retry");

}

function changeScene(sceneName, nextScene) {
    currentScene = sceneName;
    scenes[currentScene].setup(nextScene);
}

function draw() {
    scenes[currentScene].draw();

    




    









    /*------------------------Reference Text------------------------*/

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
