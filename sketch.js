var ship, ship_moving;
var sea, seaImg;

function preload(){

  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(100,200);
  ship.setAnimation(ship_moving);

  sea = createSprite(100,100);
  sea.addImage(seaImg);
  sea.velocityY = 5;
}

function draw() {  
  background("blue");

  if(sea.position.x < 0){
    sea.position.x = sea.width/2;
  }
}