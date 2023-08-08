


function preload(){
  seaImg = loadImage("sea.png");
  ship1Img = loadImage("ship1.png");
 


}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200)
  sea.addImage(seaImg)
  sea.scale = 0.3
  ship = createSprite(200,200,200,200)
  ship.addImage(ship1Img)
  ship.scale = 0.3
}

function draw() {
  background("blue");
  sea.velocityX = 1
if (sea.x <0){
  sea.x=sea.width/2;
} 
  drawSprites();
}