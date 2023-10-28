//TREX GAME using JS

//Declare variables for game objects and behaviour indicators(FLAGS)
var trex, trexRun, trexDead;
var ground, groundIMG, invGround;
var cloud, cloudIMG, cloudsGroup;
var cactus, cactiGroup, cactus1, cactus2, cactus3, cactus4, cactus5, cactus6;
var gameOver, resetButton, resetIconImg, gameOverImg;
var score, hiScore, displayHS;
var PLAY, END, gameState;
var jumpSound, dieSound, checkPointSound;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  bkIMG = loadImage("./assets/bj1.jpg");
  playerIMG = loadImage("./assets/bike.png");
  coneIMG = loadImage("./assets/cone2.png");
  spikesIMG = loadImage("./assets/spikes 1.png");
  tyresIMG = loadImage("./assets/tyres2.png");
}
function setup() {
  createCanvas(1200, 700);
  bk = createSprite(600, 350, 1200, 700);
  bk.addImage(bkIMG);
  bk.scale = 1.7;
  bk.x = bk.width / 2;
  bk.velocityX = -2;

  player = createSprite(100, 350, 10, 10);
  player.addImage(playerIMG);
}
function draw() {
  background("#faf796");
  if (bk.x < 100) {
    bk.x = bk.width / 2;
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 120 === 0) {
    cone = createSprite(1200, 250, 10, 10);
    cone.addImage(coneIMG);
    cone.y = random(120, 450);
    cone.velocityX = -5;
    cone.scale = 0.3;

    spikes = createSprite(1200, 250, 10, 10);
    spikes.addImage(spikesIMG);
    spikes.y = random(120, 450);
    spikes.velocityX = -8;
    spikes.scale = 0.3;

    tyres = createSprite(1200, 250, 10, 10);
    tyres.addImage(tyresIMG);
    tyres.y = random(120, 450);
    tyres.velocityX = -3;
    tyres.scale = 0.3;
  }
}
