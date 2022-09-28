var shipImg, ship;
var sea, seaImg;


function preload(){
 shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
 seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200, 20, 20);
  sea.addImage(seaImg);
  sea.velocityX = 2;

  ship = createSprite(200, 300, 30, 30);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.2;

}

function draw() {
  background("blue");
  drawSprites();
  
 }
